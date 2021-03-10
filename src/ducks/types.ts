import { RouterState } from 'connected-react-router'
import { AuthState } from './auth/types'
import { UserState } from './user/types'

export type Store = {
  auth: AuthState
  user: UserState
}

export interface State {
  auth: AuthState
  user: UserState
  router: RouterState
}
