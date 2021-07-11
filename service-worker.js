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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0441efc6adfb3900826bc5c428aa3c84"
  },
  {
    "url": "algorithm/components/array.html",
    "revision": "8eee45a792db71d91385739507b713b2"
  },
  {
    "url": "algorithm/components/linked.html",
    "revision": "2daec5f9d60107fb9ceebe503270613f"
  },
  {
    "url": "algorithm/components/queue.html",
    "revision": "eb0b04316f63d72668ae922c292dd3cc"
  },
  {
    "url": "algorithm/components/sort.html",
    "revision": "0651bea7445d28c82d17f80059ec611f"
  },
  {
    "url": "algorithm/components/string.html",
    "revision": "f29f88adafd065bbd6d6ae6e1ac99fd2"
  },
  {
    "url": "algorithm/components/tree.html",
    "revision": "938c8f659789332c46428dbf05b5b8b5"
  },
  {
    "url": "algorithm/index.html",
    "revision": "cc83b71cf501a62e84db5fa18319c23b"
  },
  {
    "url": "assets/css/0.styles.192449cd.css",
    "revision": "adee015161a942cf66c5ea22247a9c3c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2cbf406f.js",
    "revision": "3c527222183a8d1395535051e530792a"
  },
  {
    "url": "assets/js/11.6230bdfc.js",
    "revision": "6e6c90ac3f84b5b719c868743a1252dd"
  },
  {
    "url": "assets/js/12.fed9d7f7.js",
    "revision": "ffb7973ebfadca1ad00f92f2de12f2f3"
  },
  {
    "url": "assets/js/13.bd71346f.js",
    "revision": "66bf59f312dd50f0e2b642233cba4db0"
  },
  {
    "url": "assets/js/14.91663730.js",
    "revision": "2baf9897761147e020ff03325c11721e"
  },
  {
    "url": "assets/js/15.afe89540.js",
    "revision": "a27e2f060e641c380d87c22866f8a9f3"
  },
  {
    "url": "assets/js/16.4e7f59eb.js",
    "revision": "0f7c3f55d415c1cf6cfdee4501ed8dcd"
  },
  {
    "url": "assets/js/17.77286307.js",
    "revision": "b8d8e52b996ee04941cc33e518397454"
  },
  {
    "url": "assets/js/18.9da64000.js",
    "revision": "c7ddbde14146d297a3667bc03c799433"
  },
  {
    "url": "assets/js/19.3f677a26.js",
    "revision": "bdab3b88dd13ea95f7783aea6024add6"
  },
  {
    "url": "assets/js/2.9c48c232.js",
    "revision": "2c2c481b576b6761abe698af3c1c7631"
  },
  {
    "url": "assets/js/20.7523e153.js",
    "revision": "100fab85551f5c25e1f60e9bb03c7000"
  },
  {
    "url": "assets/js/21.ad3c0855.js",
    "revision": "45843c564d3681cff57e0f39c241c231"
  },
  {
    "url": "assets/js/22.bb901383.js",
    "revision": "e3d78618ca92d72a089faf9b6c2f491e"
  },
  {
    "url": "assets/js/23.d9912c9e.js",
    "revision": "57112e2387da86b04735bf967038ffb8"
  },
  {
    "url": "assets/js/24.53955016.js",
    "revision": "c9def53a04cb1d7af31889b948a5113e"
  },
  {
    "url": "assets/js/25.86b73844.js",
    "revision": "0e11b50e327ad616499041efb4805a67"
  },
  {
    "url": "assets/js/26.4aa4a47e.js",
    "revision": "a6bb10dc847e79c962efca6e023be1b7"
  },
  {
    "url": "assets/js/27.d66e7084.js",
    "revision": "75b0ca6bbdfd2746f21f601a3af9caa6"
  },
  {
    "url": "assets/js/3.9df853b0.js",
    "revision": "9f970250a91bfc085a5d3112d75097ec"
  },
  {
    "url": "assets/js/4.b1c1f607.js",
    "revision": "2c1a38aa853cf474bf5c278bd97e246e"
  },
  {
    "url": "assets/js/5.8c110ab9.js",
    "revision": "10b544cd653da613c7f6e49ab1de3c97"
  },
  {
    "url": "assets/js/6.75e72418.js",
    "revision": "0b104c61eaa2e17a721ebfa1c26357d4"
  },
  {
    "url": "assets/js/7.e175f834.js",
    "revision": "07c4828d1cc24d414779e3afae2e2f30"
  },
  {
    "url": "assets/js/8.c039417d.js",
    "revision": "cab3100055edee5bb9b3f7d00397deca"
  },
  {
    "url": "assets/js/9.5618bdf4.js",
    "revision": "8b2200794bef67e09cf0fd8b95c0611a"
  },
  {
    "url": "assets/js/app.e6490847.js",
    "revision": "863b008ccda7704cccf0f201d01c347c"
  },
  {
    "url": "basic/css/css.html",
    "revision": "46542ca390fa7ae62847b3ba338f8f7b"
  },
  {
    "url": "basic/css/flex.html",
    "revision": "aacc239f14099197863350d1db87995d"
  },
  {
    "url": "basic/css/layout.html",
    "revision": "a0ab0cfc973972e612c6e4a9f331585f"
  },
  {
    "url": "basic/index.html",
    "revision": "ac42a944dadfd738ee6053baa2cf8daa"
  },
  {
    "url": "basic/js/handwriting.html",
    "revision": "fd259ca128ea399c6f8ef8c252d429c2"
  },
  {
    "url": "basic/js/js.html",
    "revision": "0a984db53873b4a9a224e99e0fb2c3f2"
  },
  {
    "url": "guide.html",
    "revision": "8557664d55e7f6e2b632fdc9963848f2"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "images/photo1.jpg",
    "revision": "c2e8139dbf2f5c36a48a848dd2b74b1d"
  },
  {
    "url": "index.html",
    "revision": "f31bb27b2777e1883f3375896d35ecbf"
  },
  {
    "url": "interview/index.html",
    "revision": "db04a4db0b839578948255c3439759df"
  },
  {
    "url": "interview/network/browser.html",
    "revision": "266e7f6cd6bfa2bd226f30000b734eb0"
  },
  {
    "url": "interview/network/network.html",
    "revision": "afb7569cd578ee4948a23453d1d87ab2"
  },
  {
    "url": "interview/react/index.html",
    "revision": "6d4a20968f22618e56449c0cd754dd55"
  },
  {
    "url": "interview/vue/vue.html",
    "revision": "1dd3c74b971b88152a686af54f9d207d"
  },
  {
    "url": "interview/vue/vueInterview.html",
    "revision": "ffdd9b01d4675ad991e2fca66cb881b9"
  },
  {
    "url": "typeScript/index.html",
    "revision": "65d14f85a3af8dc778e5130fb7c92939"
  },
  {
    "url": "webpack/webpack_basic.html",
    "revision": "e2337292a743fb29854593628374b695"
  },
  {
    "url": "webpack/webpack_delop.html",
    "revision": "b77710098575ea198ead9c7550f623af"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
