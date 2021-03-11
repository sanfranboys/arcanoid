import { AuthState } from './auth/types'
import { LeaderBoardState } from './leaderboard/types'
import { UserState } from './user/types'

export type Store = {
  auth: AuthState
  user: UserState
  leaderboard: LeaderBoardState
}
