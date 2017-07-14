function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl, {
      scope: './'
    })
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
