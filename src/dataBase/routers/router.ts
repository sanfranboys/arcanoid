import { PREFIX_URL } from '@/constants'
import express from 'express'
import bodyParser from 'body-parser'
import {
  ControllerUser,
  ControllerFeedback,
  ControllerForum,
} from '../controllers'

const router = express.Router()
const routerCustom = (app: any) => {
  app.use(bodyParser.json())

  router.post('/theme/user', ControllerUser.getUserTheme)
  router.post('/theme/user/registration', ControllerUser.registrationUser)
  router.post('/theme/user/update', ControllerUser.updateTheme)

  router.get('/forums', ControllerForum.getForums)
  router.get('/forums/:id', ControllerForum.getForumById)

  router.get('/topics/:id', ControllerForum.getTopicById)
  router.post('/topics/new', ControllerForum.createTopic)

  router.post('/messages/new', ControllerForum.createMessage)
  router.post('/messages/update', ControllerForum.updateMessage)

  router.get('/feedbacks', ControllerFeedback.list)
  router.post('/feedbacks', ControllerFeedback.create)

  app.use(PREFIX_URL, router)
}
export default routerCustom
