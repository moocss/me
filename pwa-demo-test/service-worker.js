var VERSION = 'sw-cache-v1';
var precacheFiles = [
  './offline.html',

  './static/css/base.css',
  './static/css/app.css',

  './static/js/libs/jquery.min.js',
  './static/js/app.js',

  './static/images/dinosaur.png'
];

/**
 * parsed → installing → installed → activating → activated → redundant。
 */

// 缓存
self.addEventListener('install', function(event) {  // 安装后
  event.waitUntil(
    caches.open(VERSION).then(function(cache) {
      return cache.addAll(precacheFiles);
    })
  );
});

// 缓存更新
self.addEventListener('activate', function(event) { // 激活后
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // 如果当前版本和缓存版本不一致
          if (cacheName !== VERSION) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 捕获请求并返回缓存数据
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
