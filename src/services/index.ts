import { API_OUR, API_URL, OWN_API_URL } from '@/constants'
import { ApiServices } from './Api'
import { Auth } from './Auth'
import { User } from './User'
import { OAuth } from './OAuth'
import { Leaders } from './Leaders'
import { Theme } from './Theme';
import { FeedbackApi } from './Feedback'

const API = new ApiServices(API_URL)
const OWN_API = new ApiServices(OWN_API_URL)
const API2 = new ApiServices(API_OUR)
export const AuthServices = new Auth(API)
export const UserServices = new User(API)
export const OAuthService = new OAuth(API)
export const LeadersServices = new Leaders(API)
export const FeedbackServices = new FeedbackApi(OWN_API)
export const ThemeServices = new Theme(API2)
