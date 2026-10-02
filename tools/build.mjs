#!/usr/bin/env node
/*
 * Copyright (c) 2026@박주가리교감 All rights reserved.
 * 품꿈힘 한자 — 빌드 스크립트 (설치할 것 없음, Node.js만 있으면 됨)
 *
 *   node tools/build.mjs          → 문항 검사 + dist/ 폴더 생성(배포용)
 *   node tools/build.mjs --check  → 문항 검사만
 *   node tools/build.mjs --accept-engine → 핵심엔진 변경을 '정상'으로 등록
 *
 * 하는 일
 *  1) 문항 검사: id 중복, 빈칸([ ? ]) 누락, 한자/뜻 누락, 단계 값 오류 → 오류면 배포 중단
 *  2) 핵심엔진 확인: core_engine.js가 등록된 것과 다르면 경고
 *  3) src/ → dist/ 복사, 서비스워커 캐시 버전 자동 지정(내용이 바뀌면 자동으로 바뀜)
 *  4) index_singlefile.html(파일 하나로 실행되는 버전) 자동 생성
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src');
const DIST = path.join(ROOT, 'dist');
const args = new Set(process.argv.slice(2));
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
const VERSION = pkg.version;

const red = (s) => `\x1b[31m${s}\x1b[0m`, yellow = (s) => `\x1b[33m${s}\x1b[0m`, green = (s) => `\x1b[32m${s}\x1b[0m`;
const read = (p) => fs.readFileSync(p, 'utf8');
const sha = (buf) => crypto.createHash('sha256').update(buf).digest('hex');

// ---------------------------------------------------------------- 1) 문항 검사
function checkQuestions() {
  const q = read(path.join(SRC, 'data/questions.js'));
  const b = read(path.join(SRC, 'data/db-builder.js'));
  const ctx = { window: {}, console };
  vm.createContext(ctx);
  try {
    vm.runInContext(q + '\n;window.__vocab = vocabDatabase;\n' + b, ctx, { filename: 'questions.js' });
  } catch (e) {
    console.error(red('✖ questions.js를 읽을 수 없어요(문법 오류). 쉼표·따옴표·괄호를 확인하세요.'));
    console.error('  ' + e.message);
    return { ok: false };
  }
  const list = ctx.window.__vocab || [];
  const errors = [], warns = [];
  const seen = new Map();
  list.forEach((it, i) => {
    const where = `${i + 1}번째 문항(id: ${it && it.id || '없음'})`;
    if (!it || typeof it !== 'object') { errors.push(`${i + 1}번째 항목이 문항 형식이 아니에요`); return; }
    if (!it.id) errors.push(`${where}: id가 없어요`);
    else if (seen.has(it.id)) errors.push(`${where}: id가 ${seen.get(it.id)}번째 문항과 겹쳐요`);
    else seen.set(it.id, i + 1);
    if (!String(it.word || '').trim()) errors.push(`${where}: 정답(word)이 비어 있어요`);
    if (![1, 2, 3].includes(Number(it.level))) errors.push(`${where}: level은 1(품)·2(꿈)·3(힘) 중 하나여야 해요`);
    const c = String(it.context || '');
    const blanks = c.split('[ ? ]').length - 1;
    if (blanks === 0) errors.push(`${where}: 문장(context)에 빈칸 [ ? ] 가 없어요`);
    if (blanks > 1) warns.push(`${where}: 빈칸 [ ? ] 가 ${blanks}개예요(첫 번째만 표시돼요)`);
    if (it.word && c.includes(it.word)) warns.push(`${where}: 문장 안에 정답 '${it.word}'가 그대로 보여요`);
    if (!Array.isArray(it.morphemes) || !it.morphemes.length) errors.push(`${where}: 한자(morphemes)가 없어요`);
    else it.morphemes.forEach((m, k) => {
      if (!m || !String(m.hanja || '').trim()) errors.push(`${where}: ${k + 1}번째 한자가 비어 있어요`);
      if (!m || !String(m.meaning || '').trim()) warns.push(`${where}: ${k + 1}번째 한자의 뜻(meaning)이 비어 있어요`);
    });
  });
  const db = ctx.window.PKHDATABASE;
  if (!db || !Array.isArray(db.items)) errors.push('db-builder.js가 PKHDATABASE를 만들지 못했어요');

  const byLv = { 1: 0, 2: 0, 3: 0 };
  list.forEach((it) => { if (byLv[it.level] !== undefined) byLv[it.level]++; });
  console.log(`문항 ${list.length}개 (품 ${byLv[1]} · 꿈 ${byLv[2]} · 힘 ${byLv[3]})`);
  warns.slice(0, 30).forEach((w) => console.log(yellow('  ! ' + w)));
  if (warns.length > 30) console.log(yellow(`  ! …외 경고 ${warns.length - 30}개`));
  errors.forEach((e) => console.log(red('  ✖ ' + e)));
  if (errors.length) console.log(red(`✖ 문항 오류 ${errors.length}개 — 고친 뒤 다시 실행하세요.`));
  else console.log(green(`✔ 문항 검사 통과`) + (warns.length ? yellow(` (확인하면 좋은 점 ${warns.length}개)`) : ''));
  return { ok: errors.length === 0, count: list.length, contentVersion: db && db.meta && db.meta.contentVersion };
}

// ---------------------------------------------------------------- 2) 핵심엔진 확인
function checkEngine() {
  const lockPath = path.join(ROOT, 'tools/engine.lock');
  const now = sha(fs.readFileSync(path.join(SRC, 'core_engine.js')));
  if (args.has('--accept-engine') || !fs.existsSync(lockPath)) {
    fs.writeFileSync(lockPath, now + '\n');
    console.log(green('✔ 핵심엔진 지문 등록: ') + now.slice(0, 12));
    return;
  }
  const locked = read(lockPath).trim();
  if (locked === now) console.log(green('✔ 핵심엔진 변경 없음 ') + now.slice(0, 12));
  else console.log(yellow('! core_engine.js가 등록된 것과 달라요. 직접 고치신 거라면 `node tools/build.mjs --accept-engine`으로 등록하세요.'));
}

// ---------------------------------------------------------------- 3) dist 만들기
function walk(dir, base = dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    if (d.name.startsWith('.')) return [];
    return d.isDirectory() ? walk(p, base) : [path.relative(base, p).split(path.sep).join('/')];
  });
}

function build(info) {
  fs.rmSync(DIST, { recursive: true, force: true });
  const files = walk(SRC);
  const h = crypto.createHash('sha256');
  files.sort().forEach((f) => { h.update(f); h.update(fs.readFileSync(path.join(SRC, f))); });
  const BUILD_ID = `${VERSION}-${h.digest('hex').slice(0, 8)}`;

  files.forEach((f) => {
    const to = path.join(DIST, f);
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(path.join(SRC, f), to);
  });

  const fill = (s) => s.replaceAll('__VERSION__', VERSION).replaceAll('__BUILD_ID__', BUILD_ID);
  const precache = ['./', ...files.filter((f) => f !== 'sw.js').map((f) => './' + f)];
  fs.writeFileSync(path.join(DIST, 'index.html'), fill(read(path.join(SRC, 'index.html'))));
  fs.writeFileSync(path.join(DIST, 'sw.js'), fill(read(path.join(SRC, 'sw.js'))).replace('const ASSETS = __ASSETS__;', () => 'const ASSETS = ' + JSON.stringify(precache, null, 2) + ';'));
  fs.writeFileSync(path.join(DIST, 'version.json'), JSON.stringify({ version: VERSION, build: BUILD_ID, questions: info.count, contentVersion: info.contentVersion, builtAt: new Date().toISOString() }, null, 2));
  fs.writeFileSync(path.join(DIST, '.nojekyll'), '');

  // ---------------------------------------------------------------- 4) 단일파일
  let html = fill(read(path.join(SRC, 'index.html')));
  const inlineJS = (rel) => '<script>\n' + read(path.join(SRC, rel)).replace(/<\/script/gi, '<\\/script') + '\n</script>';
  html = html.replace(/<link rel="stylesheet" href="app\/app\.css">/, () => '<style>\n' + read(path.join(SRC, 'app/app.css')) + '\n</style>');
  html = html.replace(/<link rel="manifest"[^>]*>\n?/, '');
  const icon = 'data:image/png;base64,' + fs.readFileSync(path.join(SRC, 'icons/icon-192x192.png')).toString('base64');
  html = html.replace(/href="icons\/icon-1[89][02]x1[89][02]\.png"/g, `href="${icon}"`);
  html = html.replace(/<script src="([^"]+)" defer><\/script>/g, (_, src) => inlineJS(src));
  html = html.replace('<script>\n  window.PKH_BUILD', '<script>\n  window.PKH_SINGLE = true;\n  window.PKH_BUILD');
  // 단일파일에서는 data/… 스크립트가 PKH_BUILD 보다 먼저 와도 상관없음(로드 이벤트에서 시작)
  fs.writeFileSync(path.join(DIST, 'index_singlefile.html'), html);

  const size = (f) => (fs.statSync(path.join(DIST, f)).size / 1024).toFixed(0) + 'KB';
  console.log(green(`✔ dist/ 생성 완료`) + `  버전 ${VERSION} · 빌드 ${BUILD_ID}`);
  console.log(`  index.html ${size('index.html')} · index_singlefile.html ${size('index_singlefile.html')} · 파일 ${files.length + 2}개`);
}

console.log(`\n품꿈힘 한자 빌드 v${VERSION}\n`);
const info = checkQuestions();
checkEngine();
if (!info.ok) process.exit(1);
if (!args.has('--check')) build(info);
console.log('');
