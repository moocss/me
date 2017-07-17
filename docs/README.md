# Progressive Web App 下一代Web应用模型

## 认识PWA
Web技术的发展是日新月异的，当单页应用模型（Single-page App）和服务器端渲染，是当下前端构建 Web App 中比较流行的方案时，我们并不满足这些方案给我们用户体验上带来的改善。
Web App 与 原生应用相比，还是有很大的差距，我们开始慢慢习惯使用原生应用代替Web App 来消费大量的信息。
由于 Web App 过度依赖于网络环境的好坏和浏览器本身的性能所带来的体验改善; 但是 Web App 免于安装、随叫随到、无需更新等优点，瑕不掩瑜。

到底有没有一种方法能构建一个和原生应用一样级别体验的应用，这个时候 Progressive Web App 出现了, 我们一般简称为 PWA，给我们带来了比较靠谱的解决方案， 它是提升 Web App 的体验的一种新方法，能给用户带来原生应用的体验， PWA 本质上就是 Web App，只不过借助一些新技术，使她也具备了 Native App 的一些特性，兼具 Web App 和 Native App 的优点。
PWA 并不是具体指某一种前沿的技术或者某一个单一的知识点，它拥有一个完善的技术体系，我们从英文缩写来看就能看出来，它是一个渐进式的 Web App。它主要是增强 Web App 的体验，使站点具有类似原生应用的功能和体验，如：无版本问题、可发现、站点可添加至主屏幕、全屏方式运行、支持离线缓存、消息推送等。

在这个强大PWA支持阵营中，苹果的 Safari 落伍了，表现上都没有微软的 Edge 那么积极; 并且 Safari 很长的一段时间内很难得到改善。
事实上，PWA本身与其它技术方案并不冲突，比如各类的Web性能优化方案，以及基本的H5技术仍然可以落地共存，PWA只是在其之上进行更进一步，这正是其所谓渐进式命名的由来。
无论是从最近Web生态的发展，到未来应用开发技术的演进，再到实际开发落地和维护，PWA都代表了一个正确方向，值得投入。

## PWA 的主要特点包括下面三点：
  - 可靠 - 瞬间加载，即使在不稳定的网络环境下也能瞬间加载并展现，也不会出现downnasaur。
  - 体验 - 快速响应，快速的响应用户交互、平滑流畅的动画、顺畅的滚动响应用户的操作。
  - 粘性 - 有参与感，接近原生应用的体验，具有沉浸式的用户体验，用户可以添加到主屏桌面。

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
配合随之引入的 Cache Storage API,你可以自由管理 HTTP 请求文件粒度的缓存,这使得Service Worker 可以从缓存中向 web 应用提供资源,即使是在离线的环境下。为了让站点具有更好的离线体验，PWA 提供了更好的缓存 API 和缓存管理方式 Service Worker。

- App Shell：
同样是为了让站点具有更好的离线体验，除了要在缓存策略上下功夫，站点 UI 设计上也需要遵循一定的规范（如 App Shell 模型 和 离线 UX 注意事项 ），以至于站点在页面切换、内容加载、加载出错、弱网断网等等情况下不会给用户显示个大白屏。在解决了上面两个必须的关键问题后，您可以对页面渲染中的白屏问题做进一步的优化，App Shell 就是其中之一。
简单说，它就是第一次渲染个壳，等异步数据来了再填充，避免用户长时间看到白屏，从而获得更快的显示和更好的体验。

- Push Notification：
消息推送，PWA 中 推送通知中的「推送」与「通知」，其实使用的是两个不同但又相得益彰的 API ： Push API 和 Notification API 。

## Service Worker 生命周期

### Service Worker 定义
Service Worker 的使用过程很简单，所处理的事情也相对单一，我们基本上需要做的就是利用这个 API 做好站点的缓存策略。在页面脚本中注册 Service Worker 文件所在的 URL。Worker 就可以开始激活了，激活后的 Service Worker 可以监听当前域下的功能性事件，比如资源请求（fetch）、推送通知（push）、后台同步（sync）。

Service Worker大量使用Promise，因为通常它们会等待响应后继续，并根据响应返回一个成功或者失败的操作，这些场景非常适合Promise。

通常我们如果要使用 Service Worker 基本就是以下几个步骤：

 - 首先我们需要在页面的 javaScript 主线程中使用 serviceWorkerContainer.register() 来注册 Service Worker ，在注册的过程中，浏览器会在后台启动尝试 Service Worker 的安装步骤。
 - 如果注册成功，Service Worker 在 ServiceWorkerGlobalScope 环境中运行； 这是一个特殊的 worker context，与主脚本的运行线程相独立，同时也没有访问 DOM 的能力。
 - 后台开始安装步骤， 通常在安装的过程中需要缓存一些静态资源。如果所有的资源成功缓存则安装成功，如果有任何静态资源缓存失败则安装失败，在这里失败的不要紧，会自动继续安装直到安装成功，如果安装不成功无法进行下一步 — 激活 Service Worker。
 - 开始激活 Service Worker，必须要在 Service Worker 安装成功之后，才能开始激活步骤，当 Service Worker 安装完成后，会接收到一个激活事件（activate event）。激活事件的处理函数中，主要操作是清理旧版本的 Service Worker 脚本中使用资源。
 - 激活成功后 Service Worker 可以控制页面了，但是只针对在成功注册了 Service Worker 后打开的页面。也就是说，页面打开时有没有 Service Worker，决定了接下来页面的生命周期内受不受 Service Worker 控制。所以，只有当页面刷新后，之前不受 Service Worker 控制的页面才有可能被控制起来。

### 作用域与控制
Service Worker的默认作用域为基于当前文件 URL 的 `./`。意思就是如果你在`//example.com/foo/bar.js`里注册了一个 Service Worker，那么它默认的作用域为 `//example.com/foo/`。

我们把页面，workers，shared workers 叫做`clients`。 Service Worker 只能对作用域内的clients有效。一旦一个client被“控制”了，那么它的请求都会经过这个 Service Worker。我们可以通过查看navigator.serviceWorker.controller是否为 null 来查看一个client是否被 Service Worker 控制。

### 生命周期

MDN 给出了详细的 Service Worker 生命周期图:

/Users/moocss/work/WebProjects/me/docs/sw-lifecycle.jpg


我们可以看到生命周期分为这么几个状态 `安装中`, `安装后`,` 激活中`, `激活后`, `废弃`

- 安装( installing )：这个状态发生在 Service Worker 注册之后，表示开始安装，触发 install 事件回调指定一些静态资源进行离线缓存。

  install 事件回调中有两个方法：

    - event.waitUntil()：传入一个 Promise 为参数，等到该 Promise 为 resolve 状态为止。
    - self.skipWaiting()：self 是当前 context 的 global 变量，执行该方法表示强制当前处在 waiting 状态的 Service Worker 进入 activate 状态。

- 安装后( installed )：Service Worker 已经完成了安装，并且等待其他的 Service Worker 线程被关闭。
- 激活( activating )：在这个状态下没有被其他的 Service Worker 控制的客户端，允许当前的 worker 完成安装，并且清除了其他的 worker 以及关联缓存的旧缓存资源，等待新的 Service Worker 线程被激活。

  activate 回调中有两个方法：

    - event.waitUntil()：传入一个 Promise 为参数，等到该 Promise 为 resolve 状态为止。
    - self.clients.claim()：在 activate 事件回调中执行该方法表示取得页面的控制权, 这样之后打开页面都会使用版本更新的缓存。旧的 Service Worker 脚本不再控制着页面，之后会被停止。

- 激活后( activated )：在这个状态会处理 activate 事件回调 (提供了更新缓存策略的机会)。并可以处理功能性的事件 fetch (请求)、sync (后台同步)、push (推送)。
- 废弃状态 ( redundant )：这个状态表示一个 Service Worker 的生命周期结束。

这里特别说明一下，进入废弃 (redundant) 状态的原因可能为这几种：

- 安装 (install) 失败
- 激活 (activating) 失败
- 新版本的 Service Worker 替换了它并成为激活状态

### 支持的事件

MDN 也列出了 Service Worker 所有支持的事件：

/Users/moocss/work/WebProjects/me/docs/sw-events.jpg

- `install`：Service Worker 安装成功后被触发的事件，在事件处理函数中可以添加需要缓存的文件。
- `activate`：当 Service Worker 安装完成后并进入激活状态，会触发 activate 事件。通过监听 activate 事件你可以做一些预处理，如对旧版本的更新、对无用缓存的清理等。
- `message`：Service Worker 运行于独立 context 中，无法直接访问当前页面主线程的 DOM 等信息，但是通过 postMessage API，可以实现他们之间的消息传递，这样主线程就可以接受 Service Worker 的指令操作 DOM。

Service Worker 有几个重要的功能性的的事件，这些功能性的事件支撑和实现了 Service Worker 的特性。

- `fetch` (请求)：当浏览器在当前指定的 scope 下发起请求时，会触发 fetch 事件，并得到传有 response 参数的回调函数，回调中就可以做各种代理缓存的事情了。
- `push` (推送)：push 事件是为推送准备的。不过首先需要了解一下 Notification API(https://developer.mozilla.org/zh-CN/docs/Web/API/notification)  和 PUSH AP(https://developer.mozilla.org/zh-CN/docs/Web/API/Push_API)。通过 PUSH API，当订阅了推送服务后，可以使用推送方式唤醒 Service Worker 以响应来自系统消息传递服务的消息，即使用户已经关闭了页面。
- `sync` (后台同步)：sync 事件由 background sync (后台同步)发出。background sync 配合 Service Worker 推出的 API，用于为 Service Worker 提供一个可以实现注册和监听同步处理的方法。但它还不在 W3C Web API 标准中。在 Chrome 中这也只是一个实验性功能，需要访问 chrome://flags/#enable-experimental-web-platform-features ，开启该功能，然后重启生效。


### 细说生命周期

/Users/moocss/work/WebProjects/me/docs/service-worker-lifecycle.jpg

parsed（下载-解析-执行） → installing（正在安装） → installed(安装成功或失败) → activating（正在激活） → activated（激活成功） → redundant（废弃）。

#### 解析成功（Parsed）
首次注册 Service Worker 时，浏览器解决脚本并获得入口点。如果解析成功（而且满足其他条件，如 HTTPS 协议），就可以访问到 Service Worker 注册对象（registration object），其中包含 Service Worker 的状态及其作用域。

当你调用`.register()`的时候，第一个 Service Worker 被下载下来，这过程中如果下载，解析或者在初始化中有错误的话，那么 register 的Promise 会返回 reject，然后 Service Worker 会被销毁。

```js
/* In main.js */
if ('serviceWorker' in navigator) {  
    navigator.serviceWorker.register('./service-worker.js')
    .then(function(registration) {
        console.log("Service Worker Registered", registration);
    })
    .catch(function(err) {
        console.log("Service Worker Failed to Register", err);
    })
}
```

Service Worker 注册成功，并不意味着它已经完成安装，也不能说明它已经激活，仅仅是脚本被成功解析，与 document 同源，而且源协议是 HTTPS。一旦完成注册，Service Worker 将进入下一状态。

#### 正在安装（Installing）

Service Worker 脚本解析完成后，浏览器会试着安装，进入下一状态，“installing”。在 Service Worker 注册（registration） 对象中，我们可以通过 installing 子对象检查该状态。

- install 事件是 Service Worker 触发的第一个事件，并且仅触发一次； 如果你修改了你的 Service Worker，浏览器会认为这是一个新的 Service Worker，从而会再触发这个新 Service Worker 的install事件。
- installEvent.waitUntil()接收一个 Promise 参数，用它来表示 Service Worker 安装的成功与否。
- Service Worker 在安装成功并激活之前，不会响应 fetch或push等事件。
- 默认情况下，页面的请求（fetch）不会通过 Service Worker，除非它本身是通过 Service Worker 获取的，也就是说，在安装 Service Worker 之后，需要刷新页面才能有效果。
- clients.claim()可以改变这种默认行为。

```js
/* In main.js */
navigator.serviceWorker.register('./service-worker.js').then(function(registration) {  
  if (registration.installing) {
    // Service Worker is Installing
  }
})
```
在 installing 状态中，Service Worker 脚本中的 install 事件被执行。我们通常在安装事件中，为 document 缓存静态文件。

```js
/* In service-worker.js */
self.addEventListener('install', function(event) {  
  event.waitUntil(
    caches.open(currentCacheName).then(function(cache) {
      return cache.addAll(arrayOfFilesToCache);
    })
  );
});
```
install是在 Service Worker 控制 clients之前处理缓存很好的时机。
若事件中有 `event.waitUntil()` 方法，则 installing 事件会一直等到该方法中的 Promise 完成之后才会成功；若 Promise 被拒，则安装失败，Service Worker 直接进入废弃（redundant）状态。

```js
/* In service-worker.js */
self.addEventListener('install', function(event) {  
  event.waitUntil(
   return Promise.reject(); // Failure
  );
}); 
// Install Event will fail
```

##### skipWaiting

```js
/* In service-worker.js */
self.addEventListener('install', function(event) { 
  self.skipWaiting()
  event.waitUntil(
   return Promise.reject(); // Failure
  );
}); 
// Install Event will fail
```

waiting 意在让你的网站同一时间只有一个 Service Worker 在运行，但如果你不想要这样的话，你可以通过调用`self.skipWaiting()`来让新 Service Worker 立即激活。

这么做会让你的新 Service Worker 踢掉旧的，然后当它变为 waiting 状态时立即激活，注意这里不会跳过 installing，只会跳过 waiting。

在 waiting 之前或者之后调用`skipWaiting()`都可以。

`skipWaiting()`意味着新 Service Worker 控制了之前用旧 Service Worker 获取的页面，也就是说你的页面有一部分资源是通过旧 Service Worker 获取，剩下一部分是通过新 Service Worker 获取的，如果这样做会给你带来麻烦，那就不要用`skipWaiting()`,这点我们应该根据具体情况评估。

#### 安装成功/等待中（Installed/Waiting）

一旦新的 Service Worker 安装成功，Service Worker 进入安装成功（installed），它会进入wait状态直到原始 Service Worker 不控制任何 clients，这个就是等待中waiting状态，这也是浏览器确保在同一时间只有一个版本的 Service Worker 运行的机制。在此状态中，它是一个有效的但尚未激活的 worker。它尚未纳入 document 的控制，确切来说是在等待着从当前 worker 接手。

在 Service Worker 注册（registration） 对象中，可通过 waiting 子对象检查该状态。

```js
/* In main.js */
navigator.serviceWorker.register('./service-worker.js').then(function(registration) {  
  if (registration.waiting) {
    // Service Worker is Waiting
  }
})
```

这是通知 App 用户升级新版本或自动升级的好时机。

#### 正在激活（Activating）

Activate 在旧的 Service Worker 离开时会被触发，这时新的 Service Worker 可以控制 clients。这时候你可以做一些在老 Service Worker 运行时不能做的事情，比如清理缓存。

处于 waiting 状态的 Service Worker，在以下之一的情况下，会被触发 activating 状态。

当前已无激活状态的 worker。

Service Worker 脚本中的 `self.skipWaiting()` 方法被调用。

用户已关闭 Service Worker 作用域下的所有页面，从而释放了此前处于激活态的 worker。

超出指定时间，从而释放此前处于激活态的 worker。

处于 activating 状态期间，Service Worker 脚本中的 activate 事件被执行。我们通常在 activate 事件中，清理 cache 中的文件。

```js
/* In service-worker.js */
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

与 install 事件类似，如果 activate 事件中存在 `event.waitUntil()` 方法，则在其中的 Promise 完成之后，激活才会成功。如果 Promise 被拒，激活事件失败，Service Worker 进入废弃（redundant）状态。

#### 激活成功（Activated）

如果激活成功，Service Worker 进入 active 状态。在此状态中，其成为接受 document 全面控制的激活态 worker。在 Service Worker 注册（registration） 对象中，可以通过 active 子对象检查此状态。

```js
/* In main.js */
navigator.serviceWorker.register('./service-worker.js').then(function(registration) {  
  if (registration.active) {
    // Service Worker is Active
  }
})
```
如果 Service Worker 处于激活态，就可以应对事件性事件 —— `fetch` 和 `message`。


```js
/* In service-worker.js */
self.addEventListener('fetch', function(event) {  
  // Do stuff with fetch events
});
self.addEventListener('message', function(event) {  
  // Do stuff with postMessages received from document
});
```
##### clients.claim
你可以在activate事件中通过调用 `clients.claim()` 来让没被控制的 clients 受控。

#### 废弃（Redundant）

Service Worker 可能以下原因之一而被废弃：
  - installing 事件失败
  - activating 事件失败
  - 新的 Service Worker 替换其成为激活态 worker

## 更新 Service Worker

简单来说, 触发更新的几种情况：

  - 第一次导航到作用域范围内页面的时候
  - 当在24小时内没有进行更新检测并且触发功能性时间如push或sync的时候
  - Service Worker 的 URL 发生变化并调用.register()时
  - 当 Service Worker 代码发生变化，Service Worker 会做更新（还将包括引入的脚本）
  - 更新后的 Service Worker 会和原始的 Service Worker 共同存在，并运行它的install
  - 如果新的 Service Worker 不是成功状态，比如 404，解析失败，执行中报错或者在 install 过程中被 reject，它将会被废弃，之前版本的 Service Worker 还是激活状态不变。
  - 一旦新 Service Worker 安装成功，它会进入wait状态直到原始 Service Worker 不控制任何 clients。
  - self.skipWaiting()可以阻止等待，让新 Service Worker 安装成功后立即激活。

## 调试技巧

### Update on reload

这样把生命周期变得对开发友好了，每次跳转将会：

- 重新获取 SW
- 尽管字节一致，也会重新安装，也就是说install事件被执行并且更新缓存。
- 跳过 waiting，激活新的 SW。
- 导航到这个页面。

这就是说你每次操作都会更新而不用刷新页面或者关闭浏览器标签了。

### Skip Waiting

如果你有个 Service Worker 在等待状态，你可以点击 skipWaiting 让它立即变为激活状态。

### 强制刷新

如果你强制刷新页面，那么会绕过 Service Worker，变成不受控，这个功能已被定为规范，所以在其他支持 Service Worker 的浏览器中也适用。

## 列子
说了那么多的概念，来一个列子把这些知识点串联一下。以更好的理解 Service Worker的生命周期， 这个例子很简单，就是想检查浏览器是否支持Service Worker，记录Service Worker的生命周期（当前状态），然后通过加载service-worker.js来注册一个服务。

```html
	<h3>测试信息</h3>
	<ul class="worker-lifecycle">
		<li>浏览器是否支持：<span class="label" id="isSupport"></span></li>
		<li>service worker是否注册成功：<span class="label" id="isSuccess"></span></li>
		<li>当前注册状态：<span class="label" id="state"></span></li>
		<li>当前service worker状态：<span class="label" id="swState"></span></li>
	</ul>
```

```html
	<script src="./static/js/libs/jquery.min.js"></script>
	<script>
		// sw-register.js
		(function () {
			var script = document.createElement('script');
			var firstScript = document.getElementsByTagName('script')[0];
			script.type = 'text/javascript';
			script.async = true;
			script.src = 'sw-register.js?v=' + Date.now();
			firstScript.parentNode.insertBefore(script, firstScript);
		})();
	</script>
```

sw-register.js

```js
function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then(function(registration) {
      $('#isSuccess').text('注册成功');
      var serviceWorker;
      if (registration.installing) {
        serviceWorker = registration.installing;
        $('#state').text('installing');
      } else if (registration.waiting) {
        serviceWorker = registration.waiting;
        $('#state').text('waiting');
      } else if (registration.active) {
        serviceWorker = registration.active;
        $('#state').text('active');
      }
      if (serviceWorker) {
        $('#swState').text(serviceWorker.state);
        serviceWorker.addEventListener('statechange', function (e) {
          $('#swState').append('&emsp;状态变化为' + e.target.state);
        });
      }
    })
    .catch(function (error) {
      $('#isSuccess').text('注册没有成功');
    });
}

function register() {
  if ('serviceWorker' in navigator) {
    $('#isSupport').text('支持');
    window.addEventListener('load', () => {
      // 开始注册 service worker
      registerValidSW('./service-worker.js');
    });
  } else {
    $('#isSupport').text('不支持');
  }
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function(registration) {
      registration.unregister();
    });
  }
}

// Run.
register();

```

```js
// 我们的缓存名称
var CACHE_NAME = 'sw-cache-v1';
var cacheFiles = [
  './',
  './index.html',
  './offline.html',

  './static/css/base.css',
  './static/css/app.css',

  './static/js/libs/jquery.min.js',
  './static/js/app.js'
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

```


在Chrome浏览器下，当我们第一次访问含有上面代码的页面 https://moocss.github.io/me/pwa-demo-test/ ,

结果会是这样：

/Users/moocss/work/WebProjects/me/docs/service-worker-lifecycle-dmeo-1.jpg

会看到：installing → installed → activating → activated。

这个状态变化过程实际上就是 Service Worker 生命周期的反应。

当我们再次刷新此页面，结果又会是这样：

/Users/moocss/work/WebProjects/me/docs/service-worker-lifecycle-dmeo-2.jpg (刷新页面后的状态记录)


直接显示注册成功状态。

Service Worker注册时候的生命周期是这样的：

Download – 下载注册的JS文件
Install – 安装
Activate – 激活

一旦安装完成，如何注册的JS没有变化，则直接显示当前激活态。

然而，实际的开发场景要更加复杂，使得Service Worker还有其它一些状态。例如下图这样：

/Users/moocss/work/WebProjects/me/docs/service-worker-lifecycle-dmeo-3.jpg (service worker更新后的状态)

出现了waiting，这是怎么出现的呢？我们修改了Service Worker注册JS，然后重载的时候旧的Service Worker还在跑，新的Service Worker已经安装等待激活。我们打开开发者工具面板，Application → Service Workers，可能就会如下图这样：

/Users/moocss/work/WebProjects/me/docs/skipwaiting.jpg (waiting状态控制面板截图示意)

此时，我们页面强刷下会变成这样，进行了激活：

/Users/moocss/work/WebProjects/me/docs/service-worker-lifecycle-dmeo-4.jpg (强刷后开始激活)

再次刷新又回到注册完毕状态

/Users/moocss/work/WebProjects/me/docs/service-worker-lifecycle-dmeo-4.jpg (再次刷新后的状态)

然后，这些对应的状态，Service Worker是有对应的事件名进行捕获的，为：

self.addEventListener('install', function(event) { /* 安装后... */ });
self.addEventListener('activate', function(event) { /* 激活后... */ });

最后，Service Worker还支持fetch事件，来响应和拦截各种请求。

self.addEventListener('fetch', function(event) { /* 请求后... */ });

基本上，目前 Service Worker 的所有应用都是基于上面3个事件的，例如，本文要介绍的缓存和离线开发，'install'用来缓存文件，'activate'用来缓存更新，'fetch'用来拦截请求直接返回缓存数据。三者齐心，构成了完成的缓存控制结构。

## 添加到主屏幕

如果你已经搞定 https 协议的配置，我们就可以部署到本地服务器上了， 如果你没有搞定，也没关系， GitHub Pages 就一个很好的演示环境，在GitHub上新建个仓库，生成 GitHub Pages 并强制开启HTTPS， 把我们写的demo Push 上去就行。

PWA有个让人特别激动的特性就是`添加到主屏幕`, 用户可以将其保存到主屏幕，然后像原生应用一样打开它们。

我们只需在项目的根目录中添加一个manifest.json文件。

```
{
  "short_name": "My First PWA",
  "name": "My First Progressive Web App",
  "icons": [
    {
      "src":"icon.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "start_url": "./index.html",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "display": "standalone"
}
```

将icon.png和manifest.json添加到根目录中，然后在index.html中添加以下代码，如head标签中那2行代码。

```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta name="theme-color" content="#000000">
  <link rel="manifest" href="./manifest.json">
</head>
<body>
```

## 了解Cache和CacheStorage

`Cache` 和`CacheStorage`都是 Service Worker API下的接口。

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
由此可见，Service Worker 对 PWA 的重要性，相当于 XMLHTTPRequest 之于 Ajax，媒体查询（Media Query）之于响应式设计，是支撑 PWA 作为「下一代 web 应用模型」的最核心技术。

而 PWA 终将带领 web 应用进入新的时代， 即使我们的多页应用在升级 PWA 的路上不如单页的那些来得那么闪亮，但是 PWA 背后的想法与技术却实实在在的帮助我们在 web 平台上提供了更好的用户体验。

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
  - The offline cookbook（https://jakearchibald.com/2014/offline-cookbook/）
