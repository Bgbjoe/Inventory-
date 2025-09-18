self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('inv-scanner-v1').then(cache => cache.addAll([
    './',
    './index.html'
  ])));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((resp) => {
      return resp || fetch(e.request);
    })
  );
});
