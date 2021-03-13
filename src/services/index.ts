import { API_URL } from '@/constants'
import { ApiServices } from './Api'
import { Auth } from './Auth'
import { User } from './User'
import { Leaders } from './Leaders'

const API = new ApiServices(API_URL)
export const AuthServices = new Auth(API)
export const UserServices = new User(API)
export const LeadersServices = new Leaders(API)
