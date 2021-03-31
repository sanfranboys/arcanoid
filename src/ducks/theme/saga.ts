import { ThemeServices } from 'services';
import { put, takeEvery, call } from 'redux-saga/effects';
import { NotificationWindow } from 'elements';
import { setStatuschangeThemeAction, changeThemeAction } from './actions';
import { REGISTRATION_USER, REQUEST_THEME } from './actionTypes';
import { ActionRegistrationUserTypes, ActionRequestThemeTypes } from './types';

function* sagaWorkerRegistration({ payload }: ActionRegistrationUserTypes) {

  try {
    yield put(setStatuschangeThemeAction(true))
    yield call([ThemeServices, 'registrationUser'], payload)
    yield put(setStatuschangeThemeAction(false))
  } catch (error) {
    NotificationWindow({
      status: error.status,
      description: 'Что-то пошло не так',
    })
    yield put(setStatuschangeThemeAction(false))
  }
}

function* sagaWorkerChangeTheme({ payload }: ActionRequestThemeTypes) {
  const { userId } = payload
  try {
    yield put(setStatuschangeThemeAction(true))
    yield call([ThemeServices, 'updateTheme'], payload)
    const themeClass: string = yield call([ThemeServices, 'getUser'], { userId })
    yield put(changeThemeAction(themeClass))
    yield put(setStatuschangeThemeAction(false))
  } catch (error) {
    NotificationWindow({
      status: error.status,
      description: 'Что-то пошло не так',
    })
    yield put(setStatuschangeThemeAction(false))
  }
}

export default function* sagaWatcher() {
  yield takeEvery(REGISTRATION_USER, sagaWorkerRegistration)
  yield takeEvery(REQUEST_THEME, sagaWorkerChangeTheme)
}

