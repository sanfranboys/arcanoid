import { REGISTRATION_USER, REQUEST_THEME, SET_STATUS, THEME_CHANGE } from './actionTypes';
import { RegistrationUserType, RequestThemeType } from './types';

export const changeThemeAction = (payload: string) => ({
  type: THEME_CHANGE,
  payload,
});
export const requestThemeAction = (payload: RequestThemeType) => ({
  type: REQUEST_THEME,
  payload,
});

export const setStatuschangeThemeAction = (payload: boolean) => ({
  type: SET_STATUS,
  payload,
});

export const registrationUserInTable = (payload: RegistrationUserType) => ({
  type: REGISTRATION_USER,
  payload,
});
