const CACHE_NAME = 'v1'
const URLS = [
  '/',
  '/bundle.js',
  '/index.html',
  '/main.css',
  '/assets/images/arkanoid.png',
  '/assets/images/avatar.png',
  '/assets/images/dog.jpg',
  '/assets/images/notbad.jpg',
  '/assets/images/error.jpg',
  '/assets/images/game-fon.jpg',
  '/assets/fonts/81d3c5139883841834aa2ac459370dc2.woff2',
  '/assets/fonts/98bad1928614d31281c78c122e584861.woff',
  '/assets/fonts/NotoSans.woff',
  '/assets/fonts/NotoSans.woff2',
]

const WHITE_lIST = URLS.concat([ 'https://ya-praktikum.tech' ])
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(URLS))
      .catch((error) => {
        throw error
      })
  )
})

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((fromCache) => {
      const fetchRequest = event.request.clone()
      const responseUrl = new URL(fetchRequest.url)
      return new Promise((resolve, reject) => {
        fetch(fetchRequest)
          .then((response) => {
            if(
              !response ||
              response.status !== 200 ||
              !WHITE_lIST.some(
                (url) =>
                  responseUrl.pathname === '' ||
                  responseUrl.pathname === url ||
                  responseUrl.origin === url
              )
            ) {
              return resolve(response)
            }
            const responseToCache = response.clone()
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache)
            })
            return resolve(response)
          })
          .catch(() => {
            if(fromCache) {
              return resolve(fromCache)
            }
            return reject()
          })
      })
    })
  )
})
