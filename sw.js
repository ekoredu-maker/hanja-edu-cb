/*
 * Copyright (c) 2026@박주가리교감 All rights reserved.
 * 모듈: PWA Service Worker (Offline Cache Proxy)
 *
 * v4.0.4 (patch)
 * - Network First + Cache Update 전략으로 전환(업데이트 반영 개선)
 * - navigation 요청은 index.html로 폴백(오프라인 안정성)
 */

const CACHE_NAME = 'hanja-edu-cache-v4.0.4';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './index_singlefile.html',
  './style.css',
  './core_engine.js',
  './database.js',
  './manifest.json',
  './icon-192x192.png',
  './icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((name) => (name !== CACHE_NAME ? caches.delete(name) : Promise.resolve()))
    ))
  );
  self.clients.claim();
});

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    // 성공 응답만 캐시(opaque 포함 시 문제될 수 있어 상태 체크)
    if (response && (response.status === 200 || response.type === 'opaque')) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const cached = await caches.match(request);
    if (cached) return cached;
    // navigation이면 홈으로 폴백
    if (request.mode === 'navigate') {
      const fallback = await caches.match('./index.html');
      if (fallback) return fallback;
    }
    throw err;
  }
}

self.addEventListener('fetch', (event) => {
  // GET만 처리
  if (event.request.method !== 'GET') return;
  event.respondWith(networkFirst(event.request));
});
