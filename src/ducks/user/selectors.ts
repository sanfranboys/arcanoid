import { createSelector } from 'reselect'
import { UserState } from './types'

const prifileState = (state: any): UserState => state.user
export const getProfileUser = createSelector(
  prifileState,
  (state) => state.user
)
export const isLoadingUser = createSelector(
  prifileState,
  (state) => state.loading
)
export const isErrorUser = createSelector(prifileState, (state) => state.error)
