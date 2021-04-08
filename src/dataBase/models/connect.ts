import { Sequelize } from 'sequelize'
import { config } from '../config'

const { host, port, username, password, database } = config
const sequelize = new Sequelize({
  host,
  port,
  username,
  password,
  database,
  dialect:'postgres',
});

export default sequelize

