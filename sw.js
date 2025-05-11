self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('strongpercent').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/kilos.html',
          '/pesas.js',
          '/style.css',
         '/logo.png',
          '/manifest.json',
        ]);
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

  self.addEventListener('activate', (event) => {
    const cacheWhitelist = ['strongpercent'];
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  