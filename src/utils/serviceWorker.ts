function startServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          /* eslint-disable-next-line */
          console.log(
            'ServiceWorker registration successful with scope: ',
            registration.scope
          )
        })

        .catch((error: string) => {
          /* eslint-disable-next-line */
          console.log('ServiceWorker registration failed: ', error)
        })
    })
  }
}

export default startServiceWorker
