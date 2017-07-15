# Progressive Web App 下一代Web应用模型
## 认识PWA
Web技术的发展是日新月异的，当单页应用模型（Single-page App）和服务器端渲染，是当下前端构建 Web App 中比较流行的方案时，我们并不满足这些方案给我们用户体验上带来的改善。
Web App 与 原生应用相比，还是有很大的差距，我们开始慢慢习惯使用原生应用代替Web App 来消费大量的信息。
由于 Web App 过度依赖于网络环境的好坏和浏览器本身的性能所带来的体验改善;
但是 Web 应用免于安装、随叫随到、无需更新等优点，瑕不掩瑜。

到底有没有一种方法能构建一个和原生应用一样级别体验的应用，这个时候 Progressive Web App, 简称 PWA，给我们带来了比较靠谱的解决方案， 它是提升 Web App 的体验的一种新方法，能给用户原生应用的体验， PWA 本质上就是 Web App，只不过借助一些新技术，也具备了 Native App 的一些特性，兼具 Web App 和 Native App 的优点，
PWA 并不是具体指某一种前沿的技术或者某一个单一的知识点，它拥有一个完善的技术体系，我们从英文缩写来看就能看出来，这是一个渐进式的 Web App。主要是增强 Web App 的体验，使站点具有类似原生应用的功能和体验，如：无版本问题、可发现、站点可添加至主屏幕、全屏方式运行、支持离线缓存、消息推送等。

在这个强大PWA支持阵营中，苹果的 Safari 落伍了，表现上都没有微软的 Edge 那么积极; 并且 Safari 很长的一段时间内很难得到改善。
事实上，PWA本身与其它技术方案并不冲突，比如各类的Web性能优化方案，以及基本的H5技术仍然可以落地共存，PWA只是在其之上进行更进一步，这正是其所谓渐进式命名的由来。
无论是从最近Web生态的发展，到未来应用开发技术的演进，再到实际开发落地和维护，PWA都代表了一个正确方向，值得投入。

## PWA 的主要特点包括下面三点：
  - 可靠 - 瞬间加载，即使在不稳定的网络环境下也能瞬间加载并展现，也不会出现downnasaur。
  - 体验 - 快速响应，快速的响应用户交互、平滑流畅的动画、顺畅的滚动响应用户的操作。
  - 粘性 - 有参与感，接近原生应用的体验，具有沉浸式的用户体验，用户可以添加到桌面。

## PWA 具有下面一些特性

  - 渐进式 - 适用于所有的浏览器，因为它是以渐进式增强作为核心宗旨来开发的。
  - 自适应 - 适合任何终端设备：PC设备、移动设备、平板设备或者未来的任何设备。
  - 连接无关性 - 能够借助 Service Worker 在离线或者网络较差的状况下正常访问。
  - 类似应用 - 由于是在 App Shell 模型基础上开发，因为应具有 Native App 的交互和导航，给用户 Native App 的体验和熟悉感。
  - 持续更新 - 借助于 Service Worker 更新进程的作用下始终是最新状态，无版本和更新问题。
  - 安全 - 通过 HTTPS 协议提供服务，以防止窥探和确保内容不被篡改。
  - 可发现 - 应用清单文件和 Service Worker 可以让搜索引擎找到它们，从而将其识别为『应用』。
  - 粘性 - 通过推动离线通知等，可以让用户回流。
  - 可安装 - 用户可以直接添加常用的 webapp 到桌面或者主屏上，可免去到应用商店下载的麻烦。
  - 可链接 - 通过网址链接轻松分享，无需下载安装。


## 构建PWA的4个关键技术点


-  Web App Manifest： 
为了让站点能像原生应用那样安装到主屏幕，我们需要准备一些静态资源（如屏幕图标）和一个清单文件 manifest.json 去告知浏览器使用哪些图标，显示哪些应用名称等等；
添加到桌面功能，这是我们首先需要关注的一个内容，初始化项目模板中使用 static/manifest.json 的默认配置项，包括添加到桌面的图标、文案、打开方式、主题色等，开发者可以按需更换。

- Service Worker：
缓存，离线开发。
Service Worker是浏览器在后台独于网页运行的脚本,它就像一个位于浏览器与网络络之间的客户端代理,可以拦截、处理、响应流经的 HTTP 请求;
配合随之引入的 Cache Storage API,你可以自由管理 HTTP 请求文件粒度的缓存,这使得Service Worker 可以从缓存中向 web 应用提供资源,即使是在离线的环境下。为了让站点具有更好的离线体验，PWA 提供了更好的缓存 API （详见 web 存储）和缓存管理方式 Service Worker。
具体的缓存策略仍然需要开发者根据项目的实际需要进行开发；这部分需要我们重点关注，主要涉及离线资源缓存的配置管理与更新，项目默认缓存所有静态资源，并提供了简单的缓存更新机制。如果您想缓存指定内容，或配置部分动态缓存的内容及其他相关问题，均可参考 维护 service-worker.js 文件 和 Service Worker 与页面通信 两部分内容来寻找解决方案。

- App Shell：
同样是为了让站点具有更好的离线体验，除了要在缓存策略上下功夫，站点 UI 设计上也需要遵循一定的规范（如 App Shell 模型 和 离线 UX 注意事项 ），以至于站点在页面切换、内容加载、加载出错、弱网断网等等情况下不会给用户显示个大白屏。在解决了上面两个必须的关键问题后，您可以对页面渲染中的白屏问题做进一步的优化，App Shell 就是其中之一。
简单说，它就是第一次渲染个壳，等异步数据来了再填充，避免用户长时间看到白屏，从而获得更快的显示和更好的体验。

- Push Notification：
消息推送，PWA 中 推送通知中的「推送」与「通知」，其实使用的是两个不同但又相得益彰的 API ： Push API 和 Notification API 。


## 生命周期
Service Worker是有自己的独立线程的，你可以理解为在浏览器背后默默运行的一个线程，脱离浏览器窗体，因此，window以及DOM都是不能访问的，此时我们可以使用self访问全局上下文。
Service Worker大量使用Promise，因为通常它们会等待响应后继续，并根据响应返回一个成功或者失败的操作，这些场景非常适合Promise。

parsed → installing → installed → activating → activated → redundant。


### 解析成功（Parsed）

首次注册 Service Worker 时，浏览器解决脚本并获得入口点。如果解析成功（而且满足其他条件，如 HTTPS 协议），就可以访问到 Service Worker 注册对象（registration object），其中包含 Service Worker 的状态及其作用域。

```js
/* In main.js */
if ('serviceWorker' in navigator) {  
    navigator.serviceWorker.register('./sw.js')
    .then(function(registration) {
        console.log("Service Worker Registered", registration);
    })
    .catch(function(err) {
        console.log("Service Worker Failed to Register", err);
    })
}
```

Service Worker 注册成功，并不意味着它已经完成安装，也不能说明它已经激活，仅仅是脚本被成功解析，与 document 同源，而且源协议是 HTTPS。一旦完成注册，Service Worker 将进入下一状态。

### 正在安装（Installing）

Service Worker 脚本解析完成后，浏览器会试着安装，进入下一状态，“installing”。在 Service Worker 注册（registration） 对象中，我们可以通过 installing 子对象检查该状态。

```js
/* In main.js */
navigator.serviceWorker.register('./sw.js').then(function(registration) {  
    if (registration.installing) {
        // Service Worker is Installing
    }
})
```
在 installing 状态中，Service Worker 脚本中的 install 事件被执行。我们通常在安装事件中，为 document 缓存静态文件。

```js
/* In sw.js */
self.addEventListener('install', function(event) {  
  event.waitUntil(
    caches.open(currentCacheName).then(function(cache) {
      return cache.addAll(arrayOfFilesToCache);
    })
  );
});
```

若事件中有 event.waitUntil() 方法，则 installing 事件会一直等到该方法中的 Promise 完成之后才会成功；若 Promise 被拒，则安装失败，Service Worker 直接进入废弃（redundant）状态。

```js
/* In sw.js */
self.addEventListener('install', function(event) {  
  event.waitUntil(
   return Promise.reject(); // Failure
  );
}); 
// Install Event will fail
```

### 安装成功/等待中（Installed/Waiting）

如果安装成功，Service Worker 进入安装成功（installed）（也称为等待中[waiting]）状态。在此状态中，它是一个有效的但尚未激活的 worker。它尚未纳入 document 的控制，确切来说是在等待着从当前 worker 接手。

在 Service Worker 注册（registration） 对象中，可通过 waiting 子对象检查该状态。

```js
/* In main.js */
navigator.serviceWorker.register('./sw.js').then(function(registration) {  
  if (registration.waiting) {
    // Service Worker is Waiting
  }
})
```
这是通知 App 用户升级新版本或自动升级的好时机。

### 正在激活（Activating）

处于 waiting 状态的 Service Worker，在以下之一的情况下，会被触发 activating 状态。

当前已无激活状态的 worker

Service Worker 脚本中的 self.skipWaiting() 方法被调用

用户已关闭 Service Worker 作用域下的所有页面，从而释放了此前处于激活态的 worker

超出指定时间，从而释放此前处于激活态的 worker

处于 activating 状态期间，Service Worker 脚本中的 activate 事件被执行。我们通常在 activate 事件中，清理 cache 中的文件。

```js
/* In sw.js */
self.addEventListener('activate', function(event) {  
  event.waitUntil(
    // 获取所有 cache 名称
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        // 获取所有不同于当前版本名称 cache 下的内容
        cacheNames.filter(function(cacheName) {
          return cacheName != currentCacheName;
        }).map(function(cacheName) {
          // 删除内容
          return caches.delete(cacheName);
        })
      ); // end Promise.all()
    }) // end caches.keys()
  ); // end event.waitUntil()
});
```

与 install 事件类似，如果 activate 事件中存在 event.waitUntil() 方法，则在其中的 Promise 完成之后，激活才会成功。如果 Promise 被拒，激活事件失败，Service Worker 进入废弃（redundant）状态。

### 激活成功（Activated）

如果激活成功，Service Worker 进入 active 状态。在此状态中，其成为接受 document 全面控制的激活态 worker。在 Service Worker 注册（registration） 对象中，可以通过 active 子对象检查此状态。


```js
/* In main.js */
navigator.serviceWorker.register('./sw.js').then(function(registration) {  
  if (registration.active) {
    // Service Worker is Active
  }
})
```
如果 Service Worker 处于激活态，就可以应对事件性事件 —— fetch 和 message。


```js
/* In sw.js */
self.addEventListener('fetch', function(event) {  
  // Do stuff with fetch events
});
self.addEventListener('message', function(event) {  
  // Do stuff with postMessages received from document
});
```
### 废弃（Redundant）

Service Worker 可能以下之一的原因而被废弃（redundant，原意为“多余的，累赘的”）——

installing 事件失败

activating 事件失败

新的 Service Worker 替换其成为激活态 worker

## 了解Cache和CacheStorage

`Cache` 和`CacheStorage`都是Service Worker API下的接口。

其中，Cache直接和请求打交道，CacheStorage和Cache对象打交道，我们可以直接使用全局的caches属性访问CacheStorage，例如，虽然API上显示的是CacheStorage.open()，但我们实际使用的时候，直接caches.open()就可以了。
至于Cache和CacheStorage具体的增删改查API直接去这里(https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)



## Service Worker更多的应用场景
Service Worker除了可以缓存和离线开发，其可以应用的场景还有很多，举几个例子：

- 后台数据同步
- 响应来自其它源的资源请求
- 集中接收计算成本高的数据更新，比如地理位置和陀螺仪信息，这样多个页面就可以利用同一组数据
- 在客户端进行CoffeeScript，LESS，CJS/AMD等模块编译和依赖管理（用于开发目的）
- 后台服务钩子
- 自定义模板用于特定URL模式
- 性能增强，比如预取用户可能需要的资源，比如相册中的后面数张图片

## 存在问题

兼容性
	iOS 完全不支持
  桌面端Chrome和Firefox可用，IE不可用， Edge正在积极的跟进中。
  移动端Chrome可用。

国情 

	用户习惯、意识培养(使 Chrome、添加主屏、网页离线工作)
	国内安卓厂商不自带 Chrome、五花八门的Rom带来的问题。
	国内的Web环境复杂、都被围猎在原生应用的WebView中, 然后才轮得到手机浏览器。
	依赖 GCM (Google Cloud Messaging)推送的通知不可用。
  国内厂商可能并不会像三星那样对推动自家浏览器支持 PWA 那么感兴趣。


## 总结
由此可见，Service Worker 对 PWA 的重要性相当于 XMLHTTPRequest 之于 Ajax，媒体查询（Media Query）之于响应式设计，是支撑 PWA 作为「下一代 web 应用模型」的最核心技术。

而 PWA 终将带领 web 应用进入新的时代
即使我们的多页应用在升级 PWA 的路上不如单页的那些来得那么闪亮，但是 PWA 背后的想法与技术却实实在在的帮助我们在 web 平台上提供了更好的用户体验。

PWA 作为下一代 Web 应用模型，其尝试解决的是 web 平台本身的根本性问题：对网络与浏览器 UI 的硬依赖。因此，任何 web 应用都可以从中获益，这与你是多页还是单页、面向桌面还是移动端、是用 React 还是 Vue 无关。或许，它还终将改变用户对移动 web 的期待。

## 参考资源

  - 基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题 (https://lavas.baidu.com/)
  - 饿了么的 PWA 升级实践 (https://segmentfault.com/p/1210000010168669/read)
  - Service Worker 101 (https://huangxuan.me/sw-101-gdgdf/)
  - 浅谈 HTTP/2 Server Push（https://zhuanlan.zhihu.com/p/26757514)
  - 借助Service Worker和cacheStorage缓存及离线开发 （http://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/)
  - 下一代 Web 应用模型 — Progressive Web App (https://zhuanlan.zhihu.com/p/25167289)
  - Service Worker 生命周期那些事儿 (https://www.zhengqingxin.com/post/lifecycle.html)
  - Service Worker 生命周期 (http://www.wemlion.com/2016/the-service-worker-lifecycle/)
