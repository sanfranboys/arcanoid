import { ActionUser, UserState } from './types'
import {
  USER_SET_STATUS,
  USER_REQUEST,
  USER_SUCCESS,
  USER_UPDATE_AVATAR,
  USER_UPDATE_PROFILE,
} from './actionTypes'

const initialState: UserState = {
  user: {
    display_name: '',
    email: '',
    first_name: '',
    login: '',
    phone: '',
    second_name: '',
    avatar: '',
  },
  loading: false,
}

const reducer = (state = initialState, action: ActionUser) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_UPDATE_AVATAR:
      return {
        ...state,
        loading: true,
      }
    case USER_UPDATE_PROFILE:
      return {
        ...state,
        loading: true,
      }
    case USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      }
    case USER_SET_STATUS:
      return {
        loading: false,
      }
    default:
      return state
  }
}

export default reducer
