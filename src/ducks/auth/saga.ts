import { call, put, takeEvery } from 'redux-saga/effects'
import { AuthServices } from '@/services/'
import { NotificationWindow } from '@/elements/'
import { userRequestAction } from '@/ducks'
import { setStatusAction, setAuthAction } from './actions'
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTRATION } from './actionTypes'
import { ActionLoginTypes, ActionRegistrationTypes } from './types'

function* sagaWorkerLogin({ payload }: ActionLoginTypes) {
  try {
    yield call([AuthServices, 'signIn'], payload)
    yield put(setStatusAction())
    yield put(userRequestAction())
    yield put(setAuthAction(true))
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
    yield put(setStatusAction())
  }
}

function* sagaWorkerLogout() {
  try {
    yield call([AuthServices, 'logOut'])
    yield put(setStatusAction())
    yield put(setAuthAction(false))
  } catch (error) {
    NotificationWindow({
      description: 'Что-то пошло не так!',
    })
    yield put(setStatusAction())
  }
}

function* sagaWorkerRegistration({ payload }: ActionRegistrationTypes) {
  try {
    yield call([AuthServices, 'signUp'], payload)
    yield put(setAuthAction(true))
    yield put(userRequestAction())
    yield put(setStatusAction())
  } catch (error) {
    NotificationWindow({
      description: 'Неверно введены данные!',
    })
    yield put(setStatusAction())
  }
}

export default function* sagaWatcher() {
  yield takeEvery(AUTH_LOGIN, sagaWorkerLogin)
  yield takeEvery(AUTH_REGISTRATION, sagaWorkerRegistration)
  yield takeEvery(AUTH_LOGOUT, sagaWorkerLogout)
}
