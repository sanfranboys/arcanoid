import { PREFIX_URL } from '@/constants'
import express from 'express'
import bodyParser from 'body-parser'
import { ControllerUser, ControllerFeedback } from '../controllers'

const router = express.Router()
const routerCustom = (app: any) => {
  app.use(bodyParser.json())

  router.post('/theme/user', ControllerUser.getUserTheme)
  router.post('/theme/user/registration', ControllerUser.registrationUser)
  router.post('/theme/user/update', ControllerUser.updateTheme)

  router.get(`/feedbacks`, ControllerFeedback.list)
  router.post(`/feedbacks`, ControllerFeedback.create)

  app.use(PREFIX_URL, router)
}
export default routerCustom
