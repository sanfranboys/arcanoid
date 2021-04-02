import { createSelector } from 'reselect'
import { Store } from '../types'
import { ThemeState } from './types'

const prifileState = (state: Store): ThemeState => state.theme
export const getThemeUser = createSelector(
  prifileState,
  (state) => state.theme
)

export const isLoadingTheme = createSelector(
  prifileState,
  (state) => state.loading
)
