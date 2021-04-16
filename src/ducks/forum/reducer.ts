import {
  FORUM_SET_FORUM,
  FORUM_SET_FORUMS,
  FORUM_SET_TOPIC,
  FORUM_SET_STATUS,
} from './actionTypes'
import { ForumState } from './types'

export const initialState: ForumState = {
  forums: [],
  activeForum: null,
  activeTopic: null,
  status: null,
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FORUM_SET_FORUMS:
      return {
        ...state,
        forums: action.payload,
      }
    case FORUM_SET_FORUM:
      return {
        ...state,
        activeForum: action.payload,
      }
    case FORUM_SET_STATUS:
      return {
        ...state,
        status: action.payload,
      }
    case FORUM_SET_TOPIC:
      return {
        ...state,
        activeTopic: action.payload,
      }
    default:
      return state
  }
}

export default reducer
