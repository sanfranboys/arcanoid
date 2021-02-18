import { call, put, takeEvery } from 'redux-saga/effects'
import { AuthServices } from '@/services/'
import { NotificationWindow } from '@/elements/'
import { storage } from '@/utils/'
import {
  authSeccessAction,
  isAuthAction,
  authFailedAction,
  notAuthAction,
} from './actions'
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTRATION } from './actionTypes'
import { ActionLoginTypes, ActionRegistrationTypes } from './types'

function* sagaWorkerLogin({ payload }: ActionLoginTypes) {
  try {
    yield call([AuthServices, 'signIn'], payload)
    yield put(authSeccessAction())
    yield put(isAuthAction())
  } catch (error) {
    if (error.status === 400) {
      NotificationWindow({
        description: 'Вы уже в системе',
      })
    }
    if (error.status === 401) {
      NotificationWindow({
        type: 'error',
        description: 'Неверный логин или пароль',
      })
    }
    yield put(authFailedAction(error.response))
    yield put(notAuthAction())
  }
}

function* sagaWorkerLogout() {
  try {
    storage(false)
    yield call([AuthServices, 'logOut'])
    yield put(authSeccessAction())
    yield put(notAuthAction())
    window.location.href = '/auth'
  } catch (error) {
    NotificationWindow({
      description: 'Что-то пошло не так!',
    })
    yield put(authFailedAction(error.response))
  }
}

function* sagaWorkerRegistration({ payload }: ActionRegistrationTypes) {
  try {
    yield call([AuthServices, 'signUp'], payload)
    yield put(authSeccessAction())
    yield put(isAuthAction())
  } catch (error) {
    NotificationWindow({
      description: 'Неверно введены данные!',
    })
    yield put(authFailedAction(error.response))
    yield put(notAuthAction())
  }
}

export default function* sagaWatcher() {
  yield takeEvery(AUTH_LOGIN, sagaWorkerLogin)
  yield takeEvery(AUTH_REGISTRATION, sagaWorkerRegistration)
  yield takeEvery(AUTH_LOGOUT, sagaWorkerLogout)
}
