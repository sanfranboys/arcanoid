import { ActionAuthLogin, ActionRegistration } from './types'
import {
  AUTH_SET_AUTH,
  AUTH_LOGIN,
  AUTH_REGISTRATION,
  AUTH_SET_STATUS,
  AUTH_LOGOUT,
} from './actionTypes'

const setAuthAction = (payload: boolean) => ({
  type: AUTH_SET_AUTH,
  payload,
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

const setStatusAction = (payload: boolean) => ({
  type: AUTH_SET_STATUS,
  payload,
})

export {
  authLoginAction,
  authRegistrationAction,
  authLogoutAction,
  setAuthAction,
  setStatusAction,
}
