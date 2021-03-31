import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'name',

  dialect: 'postgres'
});

export default sequelize


