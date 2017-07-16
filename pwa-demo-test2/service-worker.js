var CACHE_NAME = 'sw-cache-v1';
var precacheFiles = [
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
self.addEventListener('install', function(event) {  // 安装后
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(precacheFiles);
    })
    .then(self.skipWaiting())
  );
});

// 缓存更新
self.addEventListener('activate', function(event) { // 激活后
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // 如果当前版本和缓存版本不一致
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(self.clients.claim())
  );
});

function cacheFirst(e, cached, fetched, fallback){
  e.respondWith(
    cached
      .then(function(response){
        return response || fetched;
      })
      .catch(function(_){
        return fallback;
      })
  )
}

function fastest(e, cached, fetched, fallback){
  e.respondWith(
    Promise.race([
      fetched.catch(function(_){
        return cached;
      }),
      cached
    ])
      .then(function(response){
        return response || fetched;
      }).catch(function(_){
        return fallback;
      })
  )
}

// 捕获请求并返回缓存数据
self.addEventListener('fetch', function(event) { // 请求后
  var cached = caches.match(event.request);
  var fallback = caches.match('offline.html');
  
  var fetched = fetch(event.request);
  var fetchedCopy = fetched.then(function(response){
    return response.clone();
  });

  // Cache First with fallback
  //cacheFirst(e, cached, fetched, fallback)

  // or a better one: fastest, let network and cache race
  fastest(e, cached, fetched, fallback)

  // revalidate part
  e.waitUntil(
    Promise.all([fetchedCopy, caches.open('runtime')])
      .then(function([resp, cache]){resp.ok && cache.put(e.request, resp)})
      .catch(function(_){
        /* swallow */
      })
  )
});

// Push notifications
self.addEventListener("push", event => {
  console.log("Push message received", event);
  const title = "有新动态！";
  event.waitUntil(
    self.registration.showNotification(title, {
      body: "点击查看新动态！",
      icon: "./favicon.ico",
      tag: "新动态"
    })
  );
});

self.addEventListener("notificationclick", function(event) {
  console.log("Notification click: tag", event.notification.tag);
  event.notification.close();
  const url = "https://moocss.com?notification=true";
  event.waitUntil(
    clients.matchAll({ type: "window" }).then(function(windowClients) {
      for (let i = 0; i < windowClients.length; i++) {
        const client = windowClients[i];
        if (client.url === url && "focus" in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});