// 아이콘 PNG 생성(개발용, 한 번만 실행): node tools/assets/make-icons.mjs  (Playwright 필요)
import { chromium } from 'playwright';
import fs from 'fs';
const svg = fs.readFileSync(new URL('./icon.svg', import.meta.url), 'utf8');
const b = await chromium.launch({ executablePath: process.env.CHROME || '/opt/pw-browsers/chromium' });
for (const s of [192, 512, 180]) {
  const p = await b.newPage({ viewport: { width: s, height: s } });
  await p.setContent(`<style>html,body{margin:0}svg{width:${s}px;height:${s}px;display:block}</style>${svg}`);
  await p.screenshot({ path: new URL(`../../src/icons/icon-${s}x${s}.png`, import.meta.url).pathname });
}
await b.close();
