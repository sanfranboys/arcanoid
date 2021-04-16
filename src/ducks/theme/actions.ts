import { REGISTRATION_USER, REQUEST_THEME, SET_STATUS, THEME_CHANGE, GET_THEME_USER } from './actionTypes';
import { UserIdType, RequestThemeType } from './types';

export const changeThemeAction = (payload: string) => ({
  type: THEME_CHANGE,
  payload,
});

export const getUserThemeAction = (payload: UserIdType) => ({
  type: GET_THEME_USER,
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

export const registrationUserInTable = (payload: UserIdType) => ({
  type: REGISTRATION_USER,
  payload,
});
