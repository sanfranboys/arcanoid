import { createSelector } from 'reselect'
import { Store } from '../types'
import { LeaderBoardState } from './types'

const leaderBoardState = (state: Store): LeaderBoardState => state.leaderboard

export const getLeaders = createSelector(
  leaderBoardState,
  (state) => state.leaders
)
export const isLoadingLeaderBoard = createSelector(
  leaderBoardState,
  (state) => state.loading
)
