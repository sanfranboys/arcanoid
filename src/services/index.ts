import { API_OUR, API_URL } from '@/constants'
import { ApiServices } from './Api'
import { Auth } from './Auth'
import { User } from './User'
import { OAuth } from './OAuth'
import { Leaders } from './Leaders'
import { Theme } from './Theme'
import { Forum } from './Forum'

const API = new ApiServices(API_URL)
const API2 = new ApiServices(API_OUR)
export const AuthServices = new Auth(API)
export const UserServices = new User(API)
export const OAuthService = new OAuth(API)
export const LeadersServices = new Leaders(API)
export const ThemeServices = new Theme(API2)
export const ForumServices = new Forum(API2)
