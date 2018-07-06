const CACHE_NAME = "test-cashe-1";

const urlsToCache = [
  '/',
  '/index.html',
  '/test.css',
  '/test.js'
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log("CACHE 등록 완료");
        return cache.addAll(urlsToCache);
      })
  );
})

self.addEventListener('install', function(event) {
  console.log(event.request.url);
})
