const GHPATH = 'https://cattimothy.github.io/Hobe-Fort-Travel';
// Change to a different app prefix name
const APP_PREFIX = 'Hobe_Fort_Travel_';
const VERSION = 'version_01';

// The files to make available for offline use. make sure to add 
// others to this list
const URLS = [
  `${GHPATH}"/index.html`,
  `${GHPATH}"/LICENSE`,
  `${GHPATH}"/manifest.webmanifest`,
  `${GHPATH}"/README.md`,
  `${GHPATH}"/service-worker.js`,
  `${GHPATH}"/.github/workflows/static.yml`,
  `${GHPATH}"/assets/css/bootstrap.min.css`,
  `${GHPATH}"/assets/css/bootstrap.min.css.map`,
  `${GHPATH}"/assets/css/main.css`,
  `${GHPATH}"/assets/css/mdb.min.css`,
  `${GHPATH}"/assets/css/mdb.min.css.map`,
  `${GHPATH}"/assets/css/swiper-bundle.min.css`,
  `${GHPATH}"/assets/img/封面/一起踏入藝術界.jpg`,
  `${GHPATH}"/assets/img/封面/古蹟巡禮.jpg`,
  `${GHPATH}"/assets/img/封面/放鬆一夏.jpg`,
  `${GHPATH}"/assets/img/封面/書香園地.jpg`,
  `${GHPATH}"/assets/img/封面/與夕陽有約.jpg`,
  `${GHPATH}"/assets/img/封面/賞櫻之路.jpg`,
  `${GHPATH}"/assets/img/封面/追尋馬偕足跡.jpg`,
  `${GHPATH}"/assets/img/手繪地圖/一起踏入藝術界.jpg`,
  `${GHPATH}"/assets/img/手繪地圖/古蹟巡禮.jpg`,
  `${GHPATH}"/assets/img/手繪地圖/放鬆一夏.jpg`,
  `${GHPATH}"/assets/img/手繪地圖/書香園地.jpg`,
  `${GHPATH}"/assets/img/手繪地圖/與夕陽有約.jpg`,
  `${GHPATH}"/assets/img/手繪地圖/賞櫻之路.jpg`,
  `${GHPATH}"/assets/img/手繪地圖/追尋馬偕足跡.jpg`,
  `${GHPATH}"/assets/img/路線圖/一起踏入藝術界.jpg`,
  `${GHPATH}"/assets/img/路線圖/古蹟巡禮.jpg`,
  `${GHPATH}"/assets/img/路線圖/放鬆一夏.jpg`,
  `${GHPATH}"/assets/img/路線圖/書香園地.jpg`,
  `${GHPATH}"/assets/img/路線圖/與夕陽有約.jpg`,
  `${GHPATH}"/assets/img/路線圖/賞櫻之路.jpg`,
  `${GHPATH}"/assets/img/路線圖/追尋馬偕足跡.jpg`,
  `${GHPATH}"/assets/js/anime.min.js`,
  `${GHPATH}"/assets/js/bootstrap.bundle.min.js`,
  `${GHPATH}"/assets/js/bootstrap.bundle.min.js.map`,
  `${GHPATH}"/assets/js/jquery-3.7.1.min.js`,
  `${GHPATH}"/assets/js/jquery-3.7.1.min.map`,
  `${GHPATH}"/assets/js/mdb.umd.min.js`,
  `${GHPATH}"/assets/js/mdb.umd.min.js.map`,
  `${GHPATH}"/assets/js/script.js`,
  `${GHPATH}"/assets/js/swiper-bundle.min.js`,
  `${GHPATH}"/assets/js/swiper-bundle.min.js.map`,
  `${GHPATH}"/assets/js/主題.js`,
  `${GHPATH}"/views/中文繁體/index.html`,
  `${GHPATH}"/views/中文繁體/一起踏入藝術界.html`,
  `${GHPATH}"/views/中文繁體/古蹟巡禮.html`,
  `${GHPATH}"/views/中文繁體/放鬆一夏.html`,
  `${GHPATH}"/views/中文繁體/書香園地.html`,
  `${GHPATH}"/views/中文繁體/與夕陽有約.html`,
  `${GHPATH}"/views/中文繁體/賞櫻之路.html`,
  `${GHPATH}"/views/中文繁體/追尋馬偕足跡.html`,
]

const CACHE_NAME = APP_PREFIX + VERSION
self.addEventListener('fetch', function (e) {
  console.log('Fetch request : ' + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        console.log('Responding with cache : ' + e.request.url);
        return request
      } else {
        console.log('File is not cached, fetching : ' + e.request.url);
        return fetch(e.request)
      }
    })
  )
})

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Installing cache : ' + CACHE_NAME);
      return cache.addAll(URLS)
    })
  )
})

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      cacheWhitelist.push(CACHE_NAME);
      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('Deleting cache : ' + keyList[i]);
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})