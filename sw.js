/*
 * Copyright (c) 2026@박주가리교감 All rights reserved.
 * 모듈: PWA Service Worker (Offline Cache Proxy)
 */

const CACHE_NAME = 'hanja-edu-cache-v4.0.3';
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
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );

    // 새 버전 배포 시 즉시 활성화(운영 편의)
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );

    // 활성화 후 즉시 컨트롤
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).catch(() => caches.match('./index.html'));
        })
    );
});