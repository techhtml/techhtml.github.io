const CACHE_NAME = "test-cashe-1";

const urlsToCache = [
  '/pwa/',
  '/pwa/index.html',
  '/pwa/test.css',
  '/pwa/test.js'
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CHCHE_NAME)
      .then(function(cache) {
        console.log("CACHE 등록 완료");
        return cache.addAll(urlsToCache);
      })
  );
})
