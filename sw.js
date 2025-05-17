const CACHE_NAME = 'strongpercent-v1';
const VERSION = '1.0.0'; // Change this version number when you want to force an update

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                './',
                './kilos.html',
                './pesas.js',
                './style.css',
                './logo.png',
                './manifest.json',
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
            // Ensure the new service worker takes control immediately
            return self.clients.claim();
        }).then(() => {
            // Notify all clients to reload if a new version is active
            return self.clients.matchAll().then((clients) => {
                clients.forEach((client) => {
                    client.postMessage({ type: 'UPDATE_AVAILABLE', version: VERSION });
                });
            });
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Listen for messages from the page to handle updates
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});