import {
  ActionAuthLogin,
  ActionOauthPayload,
  ActionRegistration,
} from './types'
import {
  AUTH_SET_AUTH,
  AUTH_LOGIN,
  AUTH_REGISTRATION,
  AUTH_SET_STATUS,
  AUTH_LOGOUT,
  AUTH_LOGIN_OAUTH,
} from './actionTypes'

const setAuthAction = (payload: boolean) => ({
  type: AUTH_SET_AUTH,
  payload,
})

const authLoginAction = (data: ActionAuthLogin) => ({
  type: AUTH_LOGIN,
  payload: data,
})

const authLoginOauthAction = (data: ActionOauthPayload) => ({
  type: AUTH_LOGIN_OAUTH,
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
  authLoginOauthAction,
}
