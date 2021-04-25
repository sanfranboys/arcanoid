import express, { Response } from 'express'
import fs from 'fs'
import https from 'https'
import { saga as rootSaga } from 'ducks'
import cookieParser from 'cookie-parser'
import { StaticRouterContext } from 'react-router'
import { CustomRequest } from 'types'
import compression from 'compression'
import {
  ForumModel,
  TopicMessageModel,
  TopicModel,
} from './dataBase/models/forum'
import { routerCustom, sequelize } from './dataBase'
import SiteTheme from './dataBase/models/siteTheme'
import getHotMiddlewares from './middlewares/hot'
import authMeddleware from './middlewares/auth'
import serverRender from './serverRender'

import { configureStore, getInitialState } from './store'

const key = fs.readFileSync(`${__dirname}/../key.pem`)
const cert = fs.readFileSync(`${__dirname}/../cert.pem`)

const app = express()
const shouldCompress = (req: any, res: any) => {
  if (req.headers['x-no-compression']) {
    return false
  }
  return compression.filter(req, res)
}

const server = https.createServer({ key, cert }, app)

const port = process.env.PORT || 5000

routerCustom(app)
app.use(cookieParser())
app.use(authMeddleware)

app.use(
  compression({
    filter: shouldCompress,
    threshold: 0,
  })
)

app.get('*', [...getHotMiddlewares()], (req: CustomRequest, res: Response) => {
  const location = req.url
  const { store } = configureStore(getInitialState(location), location)
  const { auth, user } = store.getState()

  if (req.customProperty) {
    user.user = req.customProperty
    auth.isAuth = true
  } else {
    auth.isAuth = false
  }

  store
    .runSaga(rootSaga)
    .toPromise()
    .then(() => {
      const context: StaticRouterContext = {}
      const content = serverRender(req, store, context)

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
  })
  SiteTheme.create({
    themeName: 'dark',
    themeClass: 'dark-theme',
  })

  ForumModel.create({
    id: 1,
    title: 'Впечатление от игры',
  })

  ForumModel.create({
    id: 2,
    title: 'Разработка',
  })

  TopicModel.create({
    title: 'Как Вам дизайн?',
    forumId: 1,
  })

  TopicModel.create({
    title: 'Геймплей',
    forumId: 1,
  })

  TopicModel.create({
    title: 'Геймплей 3',
    forumId: 1,
  })

  TopicModel.create({
    title: 'Геймплей 2',
    forumId: 2,
  })

  TopicMessageModel.create({
    text: 'Очень крутой!',
    author: 'Junepaik',
    topicId: 1,
    likes: 150,
    dislikes: 2,
  })

  TopicMessageModel.create({
    text: 'Нахрен иди пес',
    author: 'Jey',
    topicId: 1,
    likes: 0,
    dislikes: 3,
    parentId: 1,
    parentAuthor: 'Junepaik',
  })

  TopicMessageModel.create({
    text: 'Нахрен иди пес',
    author: 'Jey2',
    topicId: 1,
    likes: 5,
    dislikes: 1,
    parentId: 1,
    parentAuthor: 'Junepaik',
  })

  TopicMessageModel.create({
    text: 'вложенное во вложенное',
    author: 'Jey2',
    topicId: 1,
    likes: 5,
    dislikes: 1,
    parentId: 2,
    parentAuthor: 'Jey',
  })

  TopicMessageModel.create({
    text: 'Сообщение без родителя',
    author: 'Jey2',
    topicId: 1,
    likes: 5,
    dislikes: 1,
  })
  server.listen(port, () => {
    console.log(`Listening on port: ${port}`)
  })
}).catch(error=>console.log('Error sequelize',error))
