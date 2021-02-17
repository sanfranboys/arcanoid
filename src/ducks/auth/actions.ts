import { ActionAuthLogin, ActionRegistration } from './types'
import {
  AUTH_FAILED,
  AUTH_IS_AUTH,
  AUTH_LOGIN,
  AUTH_NOT_AUTH,
  AUTH_REGISTRATION,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
} from './actionTypes'

const isAuthAction = () => ({
  type: AUTH_IS_AUTH,
})

const notAuthAction = () => ({
  type: AUTH_NOT_AUTH,
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

const authSeccessAction = () => ({
  type: AUTH_SUCCESS,
})

const authFailedAction = (error: string) => ({
  type: AUTH_FAILED,
  payload: error,
})

export {
  isAuthAction,
  notAuthAction,
  authLoginAction,
  authRegistrationAction,
  authSeccessAction,
  authFailedAction,
  authLogoutAction,
}
