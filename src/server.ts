import express from 'express'
import { saga as rootSaga } from 'ducks'
import { StaticRouterContext } from 'react-router'
import serverRender from './serverRender'
import { configureStore, getInitialState } from './store'

const app = express()

const port = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('*', (req, res) => {
  const location = req.url
  const { store } = configureStore(getInitialState(location), location)

  store
    .runSaga(rootSaga)
    .toPromise()
    .then(() => {
      const context: StaticRouterContext = {}
      const content = serverRender(req, store, context)

      // if (context.notFound) {
      //   res.status(404)
      // }

      res.send(content)
    })
    .catch((err) => {
      throw err
    })

  const dataRequirements: (Promise<void> | void)[] = []

  return Promise.all(dataRequirements)
    .then(() => store.close())
    .catch((err) => {
      throw err
    })
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
