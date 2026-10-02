/*
 * Copyright (c) 2026@박주가리교감 All rights reserved.
 * 모듈: PWA 서비스워커 v5 (오프라인 캐시)
 *
 * ※ 이 파일은 손대지 않아도 됩니다.
 *   빌드(tools/build.mjs)가 아래 BUILD_ID 와 ASSETS 값을 자동으로 채웁니다.
 *   파일 내용이 바뀌면 BUILD_ID가 자동으로 바뀌어 학생 기기에 '새 버전' 알림이 뜹니다.
 */
const BUILD_ID = '__BUILD_ID__';
const CACHE = 'pkh-hanja-' + BUILD_ID;
const FONT_CACHE = 'pkh-fonts-v1';
const ASSETS = __ASSETS__;

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(ASSETS);
    // v4.x(예전 화면)에서 넘어오는 경우에는 기다리지 않고 바로 새 버전으로 교체
    const keys = await caches.keys();
    if (keys.some((k) => k.startsWith('hanja-edu-cache-'))) self.skipWaiting();
  })());
  // 그 밖에는: 첫 설치면 바로 활성화, 이미 v5를 쓰는 중이면 화면의 [지금 업데이트]를 기다림
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => k !== CACHE && k !== FONT_CACHE).map((k) => caches.delete(k)) // 예전 버전 캐시(hanja-edu-cache-*) 포함 정리
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // 글꼴(Google Fonts): 저장본을 먼저 쓰고 뒤에서 갱신
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(caches.open(FONT_CACHE).then(async (c) => {
      const hit = await c.match(req);
      const net = fetch(req).then((res) => { if (res && (res.ok || res.type === 'opaque')) c.put(req, res.clone()); return res; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }

  if (url.origin !== self.location.origin) return;

  // 앱 파일: 이 버전에 저장된 파일을 우선 사용(한 버전의 파일끼리만 섞이도록), 없으면 네트워크
  event.respondWith((async () => {
    const c = await caches.open(CACHE);
    const hit = await c.match(req, { ignoreSearch: true });
    if (hit) return hit;
    try {
      return await fetch(req);
    } catch (err) {
      if (req.mode === 'navigate') {
        const home = await c.match('./index.html');
        if (home) return home;
      }
      throw err;
    }
  })());
});
