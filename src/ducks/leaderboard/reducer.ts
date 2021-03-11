import { LeaderBoardState, LeaderAction } from './types'
import { LEADERBOARD_SET, LEADERBOARD_SET_ISLOADING } from './actionTypes'

const initialState: LeaderBoardState = {
  leaders: {},
  loading: false,
}

const reducer = (state = initialState, action: LeaderAction) => {
  switch (action.type) {
    case LEADERBOARD_SET:
      return {
        ...state,
        leaders: action.payload,
      }
    case LEADERBOARD_SET_ISLOADING:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}

export default reducer
