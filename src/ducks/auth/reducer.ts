import {
  AUTH_FAILED,
  AUTH_IS_AUTH,
  AUTH_LOGIN,
  AUTH_NOT_AUTH,
  AUTH_REGISTRATION,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
} from './actionTypes'
import { ActionAuth, AuthState } from './types'

const initialState: AuthState = {
  isAuth: false,
  loading: false,
  error: null,
}

const reducer = (state = initialState, action: ActionAuth) => {
  switch (action.type) {
    case AUTH_IS_AUTH:
      return {
        ...state,
        isAuth: true,
      }
    case AUTH_NOT_AUTH:
      return {
        ...state,
        isAuth: false,
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
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case AUTH_FAILED:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default reducer
