import { ActionUser, UserState } from './types'
import { USER_SET_STATUS, USER_SUCCESS } from './actionTypes'

export const initialState: UserState = {
  user: {
    id: 0,
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
    case USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      }
    case USER_SET_STATUS:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}

export default reducer
