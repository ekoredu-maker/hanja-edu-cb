/*
 * Copyright (c) 2026@박주가리교감 All rights reserved.
 * 모듈: questions.js(문항 목록) → window.PKHDATABASE(v3 스키마) 변환기
 * ※ 이 파일은 수정할 필요가 없습니다. 문항은 questions.js에서 관리하세요.
 */

/* =========================
 * PKHDATABASE (Schema v3) — 확장 가능한 코스웨어 DB
 * - 기존 vocabDatabase를 유지하면서, 새 구조(window.PKHDATABASE)를 함께 제공합니다.
 * - 엔진은 PKHDATABASE가 있으면 이를 우선 사용합니다.
 * ========================= */

(function buildPKHDatabase(){
  /* =========================
   * PKHDATABASE (Schema v3.1) — "B" 고도화 패키지
   * - vocabDatabase(레거시 입력 포맷)는 그대로 유지
   * - PKHDATABASE 생성 단계에서 문장/난이도/분류/추론유형을 자동 고도화
   * ========================= */
  const today = "2026-03-03";

  // ---------- level mapping ----------
  const mapLevelKey = (n) => (n===1 ? "pum" : (n===2 ? "kkum" : "him"));

  // ---------- normalize helpers ----------
  const normHanja = (h) => {
    const map = { "敎":"教", "兩":"兩" };
    return String(h||"").split("").map(ch => map[ch] || ch).join("");
  };
  const clean = (s) => String(s||"").replace(/\s+/g," ").trim();

  // 조사 간단 보정: [ ? ] 다음에 붙는 "(이)"/"은(는)" 패턴이 없으면 문장 말미에 (이)라고 합니다를 붙임
  const ensureBlank = (word, context) => {
    let t = String(context||"").trim();
    if (!t) return `다음 문장에서 알맞은 말을 고르세요: [ ? ]`;
    // 정답이 문장에 그대로 노출되면 1회 치환
    if (word && t.includes(word) && !t.includes("[ ? ]")) {
      t = t.replace(word, "[ ? ]");
    }
    if (!t.includes("[ ? ]")) {
      // 최소 안전장치: 문장 끝에 빈칸 삽입
      t = t.replace(/[.。]\s*$/,"");
      t = `${t} [ ? ]`;
    }
    // 흔한 깨짐 패턴 보정
    t = t.replace(/\[\s*\?\s*\]/g, "[ ? ]");
    // 빈칸 주변 공백 정리
    t = t.replace(/\s+\)/g, ")").replace(/\(\s+/g, "(");
    return clean(t);
  };

  // ---------- semantic / pack classification ----------
  const semanticGroupOf = (subject, context) => {
    const s = `${subject||""} ${context||""}`;
    if (/(숫자|수학|양|비율|평균|분수|도형|계산)/.test(s)) return "수리";
    if (/(자연|날씨|계절|환경|지구|생태|광합성|화산|지진|기압|해류)/.test(s)) return "자연";
    if (/(과학|실험|관찰|물질|에너지|자력|연소|용해|증발)/.test(s)) return "과학";
    if (/(사회|정치|경제|민주|선거|헌법|국회|권리|의무|외교|문화재|수출|수입)/.test(s)) return "사회";
    if (/(도덕|책임|규칙|협력|협동|질서|인권|평등)/.test(s)) return "도덕";
    if (/(국어|언어|독서|글|표현|질문|대답)/.test(s)) return "언어";
    if (/(한자성어|고사성어|비유|뜻으로|비유하는)/.test(s)) return "성어";
    return "혼합";
  };

  const subjectToPack = (levelKey, subject, context) => {
    const g = semanticGroupOf(subject, context);
    if (levelKey==="pum") {
      if (g==="수리") return "pum-num";
      if (g==="자연") return "pum-nat";
      if (/(학교|생활)/.test(String(subject||""))) return "pum-life";
      return "pum-mix";
    }
    if (levelKey==="kkum") {
      if (g==="과학") return "kkum-sci";
      if (g==="사회") return "kkum-soc";
      if (g==="도덕") return "kkum-mor";
      return "kkum-lang";
    }
    // him
    if (g==="과학") return "him-sci";
    if (g==="사회" || g==="도덕") return "him-soc";
    if (g==="언어" || g==="수리") return "him-think";
    if (g==="성어") return "him-think";
    return "him-mix";
  };

  // ---------- cognitive type (문맥 추론 유형) ----------
  const cognitiveTypeOf = (subject, context) => {
    const t = `${subject||""} ${context||""}`;
    if (/(뜻으로|뜻입니다|의미|말을.*라고|무엇을.*라고)/.test(t)) return "정의추론";
    if (/(원인|때문|이유|결과|따라서|그래서)/.test(t)) return "원인결과";
    if (/(비교|차이|어느.*큰|더.*많|반대|대조)/.test(t)) return "비교대조";
    if (/(과정|단계|변하|바뀌|만들어.*과정)/.test(t)) return "과정이해";
    if (/(비유|상황|태도|사자성어|한자성어|고사성어)/.test(t)) return "비유추론";
    return "일반문맥";
  };

  // ---------- difficulty (1~5) ----------
  const difficultyOf = (levelKey, wordKo, wordHanja, subject, context) => {
    // base by level band
    let d = (levelKey==="pum" ? 1 : (levelKey==="kkum" ? 2 : 3));
    const wl = (String(wordKo||"").length || 0);
    const hl = (String(wordHanja||"").length || 0);
    const cl = (String(context||"").length || 0);
    // length factors
    if (wl >= 4) d += 0.5;
    if (hl >= 3) d += 0.5;
    if (cl >= 70) d += 0.5;
    // abstractness cues
    const s = `${subject||""} ${context||""}`;
    if (/(주의|권리|의무|민주|경제|외교|평등|인권|헌법|주권|다수결)/.test(s)) d += 1.0;
    if (/(생태계|대기권|태양계|광합성|연소|용해|기압|해류|지층)/.test(s)) d += 0.8;
    if (/(한자성어|고사성어|비유)/.test(s)) d += 0.7;
    // clamp
    d = Math.max(1, Math.min(5, Math.round(d)));
    return d;
  };

  // ---------- error trap (간단 휴리스틱) ----------
  const errorTrapOf = (wordKo, context) => {
    const t = `${wordKo||""} ${context||""}`;
    if (/(동문서답|조삼모사|어부지리|새옹지마|온고지신)/.test(t)) return "비유오해";
    if (/(수출|수입)/.test(t)) return "개념반대";
    return "부분일치오답";
  };

  // ---------- lexicon build ----------
  const lexicon = {};
  (Array.isArray(vocabDatabase) ? vocabDatabase : []).forEach(it => {
    (it.morphemes||[]).forEach(m => {
      const hj = normHanja(m.hanja);
      if (!hj) return;
      if (!lexicon[hj]) {
        lexicon[hj] = { hanja: hj, meaning: m.meaning || "", reading: "", gradeHint: "" };
      } else if (!lexicon[hj].meaning && m.meaning) {
        lexicon[hj].meaning = m.meaning;
      }
    });
  });

  // ---------- levels/packs ----------
  const levels = {
    pum: { key:"pum", label:"품", gradeBand:"무학년~2", minLen:10, maxLen:16, targetItems:150 },
    kkum:{ key:"kkum",label:"꿈", gradeBand:"3~4",   minLen:14, maxLen:22, targetItems:180 },
    him: { key:"him", label:"힘", gradeBand:"5~6",   minLen:18, maxLen:30, targetItems:180 }
  };

  const packs = [
    { id:"pum-num", level:"pum", title:"품-숫자/양", tags:["number","quantity"] },
    { id:"pum-nat", level:"pum", title:"품-자연/날씨", tags:["nature","weather"] },
    { id:"pum-life",level:"pum", title:"품-학교/생활", tags:["school","life"] },
    { id:"pum-mix", level:"pum", title:"품-기초 혼합", tags:["mixed"] },
    { id:"kkum-sci", level:"kkum", title:"꿈-과학", tags:["science"] },
    { id:"kkum-soc", level:"kkum", title:"꿈-사회", tags:["social"] },
    { id:"kkum-mor", level:"kkum", title:"꿈-도덕", tags:["moral"] },
    { id:"kkum-lang",level:"kkum", title:"꿈-국어/표현", tags:["language"] },
    { id:"him-sci", level:"him", title:"힘-과학/기술", tags:["science","tech"] },
    { id:"him-soc", level:"him", title:"힘-사회/공동체", tags:["social","civics"] },
    { id:"him-think",level:"him", title:"힘-사고/논리", tags:["thinking","abstract"] },
    { id:"him-mix", level:"him", title:"힘-심화 혼합", tags:["mixed"] },
  ];

  // ---------- items ----------
  const items = (Array.isArray(vocabDatabase)? vocabDatabase: []).map((it, idx) => {
    const levelKey = mapLevelKey(it.level);
    const inferredHanja = (it.morphemes||[]).map(m => normHanja(m.hanja)).join("");
    const context = ensureBlank(it.word, it.context);

    const packId = subjectToPack(levelKey, it.subject, context);
    const semanticGroup = semanticGroupOf(it.subject, context);
    const cognitiveType = cognitiveTypeOf(it.subject, context);

    const mor = (it.morphemes||[]).map(m => {
      const hj = normHanja(m.hanja);
      return hj ? { ref: hj } : { hanja:"", meaning:"" };
    }).filter(x => x.ref || x.hanja);

    const explainShort = (it.morphemes||[]).length
      ? (it.morphemes||[]).map(m => `${normHanja(m.hanja)}(${m.meaning||""})`).join(" + ")
      : "";

    const difficulty = difficultyOf(levelKey, it.word, inferredHanja, it.subject, context);

    // aliases: 공백 제거/중복 방지
    const w = clean(it.word);
    const aliases = Array.from(new Set([w.replace(/\s+/g,"")])).filter(a => a && a !== w);

    return {
      id: it.id || (`legacy_${idx}`),
      legacyId: it.id || (`legacy_${idx}`),
      level: levelKey,
      packId,
      word: { ko: w, hanja: inferredHanja || "" },
      difficulty,
      tags: Array.from(new Set([clean(it.subject||""), semanticGroup, cognitiveType].filter(Boolean))),
      skills: ["문맥추론","한자구조인식"],
      cognitiveType,
      semanticGroup,
      errorTrap: errorTrapOf(w, context),
      related: [],
      passage: { text: context.replace("[ ? ]","{ }"), blankPolicy:"hint" },
      morphemes: mor,
      answer: { accept: [w].filter(Boolean), aliases, reject: [] },
      explain: { short: explainShort ? (explainShort + ` → (${cognitiveType})`) : `(${cognitiveType})`, examples: [] },
      source: { type:"legacy", note: String(it.subject||"") }
    };
  });

  window.PKHDATABASE = {
    meta: {
      schemaVersion: "3.1",
      contentVersion: "3.1.0-B",
      updatedAt: today,
      copyright: "2026@박주가리교감",
      description: "독해력 향상을 위한 한자어 문맥 추론 코스웨어 DB (B: 자동 고도화)"
    },
    levels,
    packs,
    lexicon,
    items
  };
})();
