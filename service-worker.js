/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f3e57ef8d0c6670bf76fff6d3ca181c1"
  },
  {
    "url": "about.html",
    "revision": "7d4128b247aa6d68fc68649de586b03d"
  },
  {
    "url": "assets/css/0.styles.48266c77.css",
    "revision": "6f124ac5000e343edbb1b0aeed792646"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f6595224.js",
    "revision": "e37dc304be7830235c451deb0a31baca"
  },
  {
    "url": "assets/js/11.377eaa22.js",
    "revision": "c9900891374867f2b960f847a9e48f72"
  },
  {
    "url": "assets/js/12.f7176e2b.js",
    "revision": "235c3c3ff3c19838d79067eeda2152e4"
  },
  {
    "url": "assets/js/13.3f037824.js",
    "revision": "f7d1df5b9e0ff4909f99707b540c1d61"
  },
  {
    "url": "assets/js/14.09a9e9a1.js",
    "revision": "80ba3f9902625eb17af6aaf3ae1f9ef2"
  },
  {
    "url": "assets/js/15.e36b35c6.js",
    "revision": "73bf5bce2541eefa65fb1cfcac53fc99"
  },
  {
    "url": "assets/js/16.2e095cfd.js",
    "revision": "1db18e83f87bf63772c803c2aab5c816"
  },
  {
    "url": "assets/js/17.825b6a0c.js",
    "revision": "deab5fa7ea8d21f212209ad867814b8f"
  },
  {
    "url": "assets/js/18.c3ab16bd.js",
    "revision": "4079a659ca7e8be55769c604fbe74f9d"
  },
  {
    "url": "assets/js/19.b8c868e8.js",
    "revision": "8f515a22d56658f5d06641c615861c48"
  },
  {
    "url": "assets/js/20.34fd4e2d.js",
    "revision": "6bb5b0dc9d518f97bf4cdef9b60e5658"
  },
  {
    "url": "assets/js/21.661fe610.js",
    "revision": "d4f891570abefc688d64e13df719ff5b"
  },
  {
    "url": "assets/js/22.ed46af67.js",
    "revision": "e9cb0997ae994ef3d0e018a52ded2a61"
  },
  {
    "url": "assets/js/3.2c602196.js",
    "revision": "16a1c0f647518d0fb1ec079b4f9502b5"
  },
  {
    "url": "assets/js/4.bec32aa2.js",
    "revision": "3be446993e6d9318c16047c18616ee16"
  },
  {
    "url": "assets/js/5.2590636f.js",
    "revision": "c3d3e20ab68b4b2299080b98c13f003e"
  },
  {
    "url": "assets/js/6.52c8b565.js",
    "revision": "f0cc344418bd1201da9b87b4845cc0df"
  },
  {
    "url": "assets/js/7.4f3910d8.js",
    "revision": "47d6998c4473a4ec8adc5b1b6b5e8e1e"
  },
  {
    "url": "assets/js/8.bac3baf7.js",
    "revision": "8b6aa11756356bb69fdc58af198f988d"
  },
  {
    "url": "assets/js/9.47377419.js",
    "revision": "6b319a05ea5aafb513881139cfc4cc2e"
  },
  {
    "url": "assets/js/app.397941f4.js",
    "revision": "0b357854f366dffc22ce6a759cf7698c"
  },
  {
    "url": "assets/js/vendors~docsearch.cda19412.js",
    "revision": "46195b62fb196de7b91415b1a9873cf1"
  },
  {
    "url": "demo.html",
    "revision": "723e57e7a3001b9004cc1a2076789363"
  },
  {
    "url": "guide/about.html",
    "revision": "54ea27b3dac2bee4eeabb8099978e770"
  },
  {
    "url": "guide/feedback.html",
    "revision": "88ab4ececdfa69494c471c2e029d43fc"
  },
  {
    "url": "guide/index.html",
    "revision": "fb3153ba7a628f36fdda48eb5b5ae435"
  },
  {
    "url": "guide/webp.html",
    "revision": "0fafa08b74809f8b54e023988bf53802"
  },
  {
    "url": "idc.html",
    "revision": "a26161a0a126eb87b832847ed0886f8c"
  },
  {
    "url": "img/index.gif",
    "revision": "e5b195f9745ee3b93ffef49002acbae6"
  },
  {
    "url": "img/logo.png",
    "revision": "eb3005fefdce0642b3a08d98aae96ce0"
  },
  {
    "url": "img/logo3.png",
    "revision": "595e2676fb8c4f844487f6ca0c4ccf18"
  },
  {
    "url": "img/novel.png",
    "revision": "e24b473891502eccbcd0e662dea9ecda"
  },
  {
    "url": "index.html",
    "revision": "fedb16f5f030b6923338d0e8f733db97"
  },
  {
    "url": "releases.html",
    "revision": "bc9eee65c0a8cb007c586e94d82dd3f2"
  },
  {
    "url": "sponsors.html",
    "revision": "4326f0749dc5ef2ccd557931b6748ed5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
