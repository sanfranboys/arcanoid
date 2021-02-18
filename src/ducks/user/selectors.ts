import { createSelector } from 'reselect'
import { Store } from '../types'
import { UserState } from './types'

const prifileState = (state: Store): UserState => state.user
export const getProfileUser = createSelector(
  prifileState,
  (state) => state.user
)
export const isLoadingUser = createSelector(
  prifileState,
  (state) => state.loading
)
