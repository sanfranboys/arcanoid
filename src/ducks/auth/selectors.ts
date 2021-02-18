import { createSelector } from 'reselect'
import { Store } from '../types'
import { AuthState } from './types'

const authState = (state: Store): AuthState => state.auth

export const isAuth = createSelector(authState, (state) => state.isAuth)
export const isLoadingAuth = createSelector(authState, (state) => state.loading)
