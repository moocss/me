var CACHE_NAME = "sw-cache-v1";
var precacheFiles = [
  "./",
  "./index.html",
  "./offline.html",

  "./static/css/base.css",
  "./static/css/app.css",

  "./static/js/libs/jquery.min.js",
  "./static/js/app.js",

  "./static/images/dinosaur.png",
  "./static/images/pwa-logo.png"
];
var firstRegister = 1;

/**
 * Service Worker 生命周期
 * parsed → installing → installed → activating → activated → redundant。
 */

function setOfCached(cache) {
  return cache
    .keys()
    .then(function(requests) {
      if (requests && requests.length > 0) {
        firstRegister = 0;
      }
    });
}

// 缓存
self.addEventListener("install", function(event) {
  // 安装后
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function(cache) {
        setOfCached(cache);
        return cache.addAll(precacheFiles);
      })
      .then(function(){
        return self.skipWaiting()
      })
  );
});

// 缓存更新
self.addEventListener("activate", function(event) {
  // 激活后
  event.waitUntil(
    caches
      .keys()
      .then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            // 如果当前版本和缓存版本不一致
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(
        function() {
          return self.clients.claim()
        }
      )
      .then(function() {
        // 如果非首次安装 Service Worker 或缓存中原先有缓存的静态资源，我们需要通知接管页面，sw.js有更新，提示用户点击刷新页面
        if (!firstRegister) {
          return self.clients.matchAll()
            .then(function (clients) {
              if (clients && clients.length) {
                clients.forEach(function(client) {
                  client.postMessage('sw.update');
                })
              }
            })
        }
      })
  );
});

function cacheFirst(e, cached, fetched, fallback) {
  e.respondWith(
    cached
      .then(function(response) {
        return response || fetched;
      })
      .catch(function(_) {
        return fallback;
      })
  );
}

function fastest(e, cached, fetched, fallback) {
  e.respondWith(
    Promise.race([
      fetched.catch(function(_) {
        return cached;
      }),
      cached
    ])
      .then(function(response) {
        return response || fetched;
      })
      .catch(function(_) {
        return fallback;
      })
  );
}

// 捕获请求并返回缓存数据
self.addEventListener("fetch", function(event) {
  // 请求后
  var cached = caches.match(event.request);
  var fallback = caches.match("offline.html");

  var fetched = fetch(event.request);
  var fetchedCopy = fetched.then(function(response) {
    return response.clone();
  });

  // Cache First with fallback
  //cacheFirst(e, cached, fetched, fallback)

  // or a better one: fastest, let network and cache race
  fastest(e, cached, fetched, fallback);

  // revalidate part
  e.waitUntil(
    Promise.all([fetchedCopy, caches.open("runtime")])
      .then(function([resp, cache]) {
        resp.ok && cache.put(e.request, resp);
      })
      .catch(function(_) {
        /* swallow */
      })
  );
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

// 处理 service worker 更新
function handlerUpdateMessage(e) {
  // 在这里可以检测到 service worker 文件的更新，通常我们建议做页面的 reload
  const metas = document.getElementsByTagName("meta");

  for (let i = 0, len = metas.length; i < len; i++) {
    let meta = metas[i];
    if (meta.name === "theme-color") {
      meta.content = "#000";
    }
  }

  const dom = document.createElement("div");

  dom.innerHTML = `
    <style>
      .app-refresh {background:#000;color:#fff;height:52px;line-height:52px;opacity:1;position:fixed;left:0;right:0;z-index:10001;padding:0 18px;animation: app-refresh-animation 1s;}
      .app-refresh-wrap{display:flex;}
      .app-refresh-wrap span{display:inline-block;flex:1;font-size:15px;}
      .app-refresh-wrap button{color:#fff;outline:none;font-size:15px;}
      @keyframes app-refresh-animation{from {height: 0;opacity: 0}to {height: 52px;opacity: 1;}}
      @-webkit-keyframes app-refresh-animation{from {height: 0;opacity: 0}to {height: 52px;opacity: 1;}}
      @-o-keyframes app-refresh-animation{from {height: 0;opacity: 0}to {height: 52px;opacity: 1;}}
      @-moz-keyframes app-refresh-animation{from {height: 0;opacity: 0}to {height: 52px;opacity: 1;}}
    </style>
    <div class="app-refresh" id="app-refresh">
      <div class="app-refresh-wrap">
        <span>已更新最新版本</span>
        <button onclick="location.reload()">点击刷新</button>
      </div>
     </div>
  `;
  document.body.appendChild(dom);
}

self.addEventListener("message", e => {
  // received the update message from sw
  if (e.data === "sw.update") {
    handlerUpdateMessage(e);
  }
});
