// 我们的缓存名称
var CACHE_NAME = 'sw-cache-v1';
var cacheFiles = [
  './',
  './index.html',
  './offline.html',

  './static/css/base.css',
  './static/css/app.css',

  './static/js/libs/jquery.min.js',
  './static/js/app.js',

  "./static/images/dinosaur.png",
  "./static/images/pwa-logo.png"
];

/**
 * Service Worker 生命周期
 * parsed → installing → installed → activating → activated → redundant。
 */

// 缓存
// The first time the user starts up the PWA, 'install' is triggered.
self.addEventListener('install', function(event) {  // 安装后
  event.waitUntil(
    // Open the cache
    caches.open(CACHE_NAME).then(function(cache) {
      // Add all the default files to the cache
      return cache.addAll(cacheFiles);
    })
  );
});

// 缓存更新
// Delete old caches that are not our current one!
self.addEventListener('activate', function(event) { // 激活后
  event.waitUntil(
    // Get all the cache keys (cacheName)
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // 如果当前版本和缓存版本不一致
          if (cacheName !== CACHE_NAME) {
            // Delete that cached file
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 捕获请求并返回缓存数据
// When the webpage goes to fetch files, we intercept that request and serve up the matching files
self.addEventListener('fetch', function(event) { // 请求后
  var cached = caches.match(event.request);
  var fallback = caches.match('offline.html');
  var fetched = fetch(event.request);

  // event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
  event.respondWith(
    cached.then(function(response){
      return response || fetched;
    }).catch(function(_){
      return fallback;
    })
  );
});
