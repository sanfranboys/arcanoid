import { Sequelize } from 'sequelize'
import mongoose from 'mongoose'
import { config, mongoConnectionString } from '../config'

const { host, port, username, password, database } = config
const sequelize = new Sequelize({
  host,
  port,
  username,
  password,
  database,
  dialect: 'postgres',
})

export default sequelize

mongoose.connect(mongoConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', () => console.log('Failed mongo connection'))
db.once('open', () => console.log('Connected mongo'))
