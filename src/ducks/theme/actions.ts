import { THEME_CHANGE } from './actionTypes';

export const setAuthAction = (payload: boolean) => ({
  type: THEME_CHANGE,
  payload,
})
