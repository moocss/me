var VERSION = 'sw-cache-v1';
var precacheFiles = [
  './',
  './index.html',

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
  // event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
  event.respondWith(caches.match(event.request).catch(function(e) {
    // 如果捕获到异常错误，直接返回 fetch() 请求资源
    console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
    return fetch(event.request);
  }).then(function(response) {
    caches.open(VERSION).then(function(cache) {
      cache.put(event.request, response);
    });
    return response.clone();
  }).catch(function(e) {
    return caches.match('./static/images/dinosaur.png');
  }));
});