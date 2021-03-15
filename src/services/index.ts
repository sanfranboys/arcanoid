import { API_URL } from '@/constants'
import { ApiServices } from './Api'
import { Auth } from './Auth'
import { User } from './User'
import { OAuth } from './OAuth'

const API = new ApiServices(API_URL)
export const AuthServices = new Auth(API)
export const UserServices = new User(API)
export const OAuthService = new OAuth(API)
