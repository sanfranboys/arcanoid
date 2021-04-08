import { RouterState } from 'connected-react-router'
import { AuthState } from './auth/types'
import { LeaderBoardState } from './leaderboard/types'
import { ThemeState } from './theme/types'
import { UserState } from './user/types'
import { FeedbackState } from './feedback/types'

export type Store = {
  auth: AuthState
  user: UserState
  leaderboard: LeaderBoardState
  theme: ThemeState
  feedback: FeedbackState
}

export interface State {
  auth: AuthState
  user: UserState
  feedback: FeedbackState
  router: RouterState
}
