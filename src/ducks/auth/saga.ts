import { call, put, takeEvery } from 'redux-saga/effects'
import { AuthServices } from 'services/'
import { NotificationWindow } from 'elements'
import { userRequestAction } from 'ducks/'
import { setStatusAction, setAuthAction } from './actions'
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTRATION } from './actionTypes'
import { ActionLoginTypes, ActionRegistrationTypes } from './types'

function* sagaWorkerLogin({ payload }: ActionLoginTypes) {
  try {
    yield put(setStatusAction(true))
    yield call([AuthServices, 'signIn'], payload)
    yield put(setAuthAction(true))
    yield put(userRequestAction())
    yield put(setStatusAction(false))
  } catch (error) {
    if (error.status === 400) {
      NotificationWindow({
        status: error.status,
        description: 'Вы уже в системе',
      })
    }
    if (error.status === 401) {
      NotificationWindow({
        status: error.status,
        type: 'error',
        description: 'Неверный логин или пароль',
      })
    }
    yield put(setStatusAction(false))
  }
}

function* sagaWorkerLogout() {
  try {
    yield put(setStatusAction(true))
    yield call([AuthServices, 'logOut'])
    yield put(setStatusAction(false))
    yield put(setAuthAction(false))
  } catch (error) {
    NotificationWindow({
      status: error.status,
      description: 'Что-то пошло не так!',
    })
    yield put(setStatusAction(false))
  }
}

function* sagaWorkerRegistration({ payload }: ActionRegistrationTypes) {
  try {
    yield put(setStatusAction(true))
    yield call([AuthServices, 'signUp'], payload)
    yield put(setAuthAction(true))
    yield put(userRequestAction())
    yield put(setStatusAction(false))
  } catch (error) {
    NotificationWindow({
      status: error.status,
      description: 'Неверно введены данные!',
    })

    yield put(setStatusAction(false))
  }
}

export default function* sagaWatcher() {
  yield takeEvery(AUTH_LOGIN, sagaWorkerLogin)
  yield takeEvery(AUTH_REGISTRATION, sagaWorkerRegistration)
  yield takeEvery(AUTH_LOGOUT, sagaWorkerLogout)
}
