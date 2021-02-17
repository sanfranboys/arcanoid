import { createSelector } from 'reselect'
import { UserTypes } from './types'

const prifileState = (state: any): UserTypes => state.user.user
export const getProfileUser = createSelector(prifileState, (state) => state)
