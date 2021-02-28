import { AuthState } from './auth/types'
import { UserState } from './user/types'

export type Store = {
  auth: AuthState
  user: UserState
}
