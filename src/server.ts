import express, { Response } from 'express'
import fs from 'fs'
import https from 'https'
import { saga as rootSaga } from 'ducks'
import cookieParser from 'cookie-parser'
import { StaticRouterContext } from 'react-router'
import { CustomRequest } from 'types'
import { routerCustom, sequelize } from './dataBase'
import SiteTheme from './dataBase/models/siteTheme'
import getHotMiddlewares from './middlewares/hot'
import authMeddleware from './middlewares/auth'
import themeMeddleware from './middlewares/theme'
import serverRender from './serverRender'
import { configureStore, getInitialState } from './store'

const key = fs.readFileSync(`${__dirname}/../key.pem`)
const cert = fs.readFileSync(`${__dirname}/../cert.pem`)

const app = express()

routerCustom(app)

const server = https.createServer({ key, cert }, app)

const port = process.env.PORT || 5000

app.use(express.static('dist'))

app.use(cookieParser())

app.use(authMeddleware)
app.use(themeMeddleware)

app.get('*', [...getHotMiddlewares()], (req: CustomRequest, res: Response) => {
  const location = req.url
  const { store } = configureStore(getInitialState(location), location)
  const { auth, user, theme } = store.getState()
  if (req.customProperty) {
    user.user = req.customProperty
    auth.isAuth = true
    theme.theme = req.customTheme
  } else {
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

sequelize.sync({ force: true }).then(() => {
  SiteTheme.create({
    themeName: 'default',
    themeClass: 'default-theme',
  });
  SiteTheme.create({
    themeName: 'dark',
    themeClass: 'dark-theme',
  });
  server.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  })
})






