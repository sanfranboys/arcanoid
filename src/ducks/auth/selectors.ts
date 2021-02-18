import { createSelector } from 'reselect'
import { AuthState } from './types'

const authState = (state: any): AuthState => state.auth

export const isAuth = createSelector(authState, (state) => state.isAuth)
export const isLoadingAuth = createSelector(authState, (state) => state.loading)
export const isErrorAuth = createSelector(authState, (state) => state.error)
