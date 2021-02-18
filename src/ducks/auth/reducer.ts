import {
  AUTH_LOGIN,
  AUTH_REGISTRATION,
  AUTH_LOGOUT,
  AUTH_SET_AUTH,
  AUTH_SET_STATUS,
} from './actionTypes'
import { ActionAuth, AuthState } from './types'

const initialState: AuthState = {
  isAuth: false,
  loading: false,
  error: null,
}

const reducer = (state = initialState, action: ActionAuth) => {
  switch (action.type) {
    case AUTH_SET_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      }
    case AUTH_LOGIN:
      return {
        ...state,
        loading: true,
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        loading: true,
      }
    case AUTH_REGISTRATION:
      return {
        ...state,
        loading: true,
      }
    case AUTH_SET_STATUS:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export default reducer
