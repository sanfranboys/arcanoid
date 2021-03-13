import { LeaderBoardState, SetLeadersAction } from './types'
import { LEADERBOARD_SET } from './actionTypes'

const initialState: LeaderBoardState = {
  leaders: [],
  loading: false,
}

const reducer = (state = initialState, action: SetLeadersAction) => {
  switch (action.type) {
    case LEADERBOARD_SET:
      return {
        ...state,
        leaders: action.payload,
      }
    default:
      return state
  }
}

export default reducer
