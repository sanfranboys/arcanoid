import { ActionAuthLogin, ActionRegistration } from './types'
import {
  AUTH_SET_AUTH,
  AUTH_LOGIN,
  AUTH_REGISTRATION,
  AUTH_SET_STATUS,
  AUTH_LOGOUT,
} from './actionTypes'

const setAuthAction = (data: boolean) => ({
  type: AUTH_SET_AUTH,
  payload: data,
})

const authLoginAction = (data: ActionAuthLogin) => ({
  type: AUTH_LOGIN,
  payload: data,
})

const authLogoutAction = () => ({
  type: AUTH_LOGOUT,
})

const authRegistrationAction = (data: ActionRegistration) => ({
  type: AUTH_REGISTRATION,
  payload: data,
})

const setStatusAction = () => ({
  type: AUTH_SET_STATUS,
})

export {
  authLoginAction,
  authRegistrationAction,
  authLogoutAction,
  setAuthAction,
  setStatusAction,
}
