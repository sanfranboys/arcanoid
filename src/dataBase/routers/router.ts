import { PREFIX_URL } from '@/constants'
import express from 'express'
import bodyParser from 'body-parser'
import { ControllerUser } from '../controllers'
import {
  createMessage,
  createTopic,
  getForumById,
  getForums,
  getTopicById,
  updateMessage,
} from '../controllers/forum'

const router = express.Router()
const routerCustom = (app: any) => {
  app.use(bodyParser.json())

  router.post('/theme/user', ControllerUser.getUserTheme)
  router.post('/theme/user/registration', ControllerUser.registrationUser)
  router.post('/theme/user/update', ControllerUser.updateTheme)

  router.get('/forums', getForums)
  router.get('/forums/:id', getForumById)
  router.get('/topics/:id', getTopicById)
  router.post('/topics/new', createTopic)
  router.post('/messages/new', createMessage)
  router.post('/messages/update', updateMessage)

  app.use(PREFIX_URL, router)
}
export default routerCustom
