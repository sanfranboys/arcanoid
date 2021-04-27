import { isProd } from '@/constants'

export const config = {
  host: isProd ? 'postgres' : 'localhost',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'name',
}

export const mongoConnectionString = isProd
  ? 'mongodb://mongo/sanfranoid'
  : 'mongodb://127.0.0.1:27017/sanfranoid'
