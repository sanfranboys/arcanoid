import express from 'express'
import fs from 'fs'
import https from 'https'
import { saga as rootSaga } from 'ducks'
import cookieParser from 'cookie-parser'
import { StaticRouterContext } from 'react-router'
import { auth } from './middleware'
import serverRender from './serverRender'
import { configureStore, getInitialState } from './store'

const key = fs.readFileSync( `${__dirname  }/../key.pem`);
const cert = fs.readFileSync(`${__dirname  }/../cert.pem`);

const app = express()
const server = https.createServer({key, cert }, app);

const port = process.env.PORT || 5000

app.use(express.static('dist'));
app.use(cookieParser())

app.use(auth)

app.get('*', (req:any, res) => {
  const location = req.url
  const { store } = configureStore(getInitialState(location), location)
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const {user, auth} = store.getState();
  if(req.customProperty){
    user.user = req.customProperty
    auth.isAuth = true
  }else{
    auth.isAuth = false
  }

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

server.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

