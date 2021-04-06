import { RouterState } from 'connected-react-router'
import { AuthState } from './auth/types'
import { ForumState } from './forum/types'
import { LeaderBoardState } from './leaderboard/types'
import { ThemeState } from './theme/types'
import { UserState } from './user/types'

export type Store = {
  auth: AuthState
  user: UserState
  leaderboard: LeaderBoardState
  theme: ThemeState
  forum: ForumState
}

export interface State {
  auth: AuthState
  user: UserState
  router: RouterState
}
