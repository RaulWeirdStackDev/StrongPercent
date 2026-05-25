const CACHE_NAME = 'strongpercent-v2';
const VERSION = '1.0.2';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                './',
                './index.html',
                './kilos.html',
                './libras.html',
                './pesas.js',
                './style.css',
                './logo.png',
                './logo192.png',
                './logo512.png',
                './manifest.json'
            ]);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            return self.clients.claim();
        }).then(() => {
            return self.clients.matchAll().then((clients) => {
                clients.forEach((client) => {
                    client.postMessage({ type: 'UPDATE_AVAILABLE', version: VERSION });
                });
            });
        })
    );
});

self.addEventListener('fetch', (event) => {
    // HTML siempre desde la red para recibir cambios al instante
    if (event.request.destination === 'document') {
        event.respondWith(
            fetch(event.request).catch(() => caches.match(event.request))
        );
        return;
    }

    // CSS, JS, imágenes → cache-first (mejor rendimiento)
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});