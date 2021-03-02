import { AUTH_SET_AUTH, AUTH_SET_STATUS } from './actionTypes'
import { ActionAuth, AuthState } from './types'

const initialState: AuthState = {
  isAuth: true,
  loading: true,
}

const reducer = (state = initialState, action: ActionAuth) => {
  switch (action.type) {
    case AUTH_SET_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      }
    case AUTH_SET_STATUS:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}

export default reducer
