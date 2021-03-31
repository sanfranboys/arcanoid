import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import { OWN_API_URL } from '@/constants'
import { Express } from 'express'
import { connection } from './config/mongo'
import { feedbackController } from './index'

export const initMongo = (app: Express) => {
  mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = mongoose.connection
  db.on('error', () => console.log('!!!Mongo connection error!!!'))
  db.once('open', () => console.log('!!!Connected Mongo!!!'))

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.get(`${OWN_API_URL}/feedbacks`, feedbackController.list)
  app.post(`${OWN_API_URL}/feedbacks`, feedbackController.create)
}
