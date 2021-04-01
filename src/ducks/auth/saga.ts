import { call, put, takeEvery } from 'redux-saga/effects'
import { AuthServices, OAuthService, ThemeServices } from 'services'
import { NotificationWindow } from 'elements'
import { userRequestAction } from 'ducks'
import { setStatusAction, setAuthAction } from './actions'
import {
  AUTH_LOGIN,
  AUTH_LOGIN_OAUTH,
  AUTH_LOGOUT,
  AUTH_REGISTRATION,
} from './actionTypes'
import {
  ActionLoginOauthTypes,
  ActionLoginTypes,
  ActionRegistrationTypes,
} from './types'

function* sagaWorkerLogin({ payload }: ActionLoginTypes) {
  try {
    yield put(setStatusAction(true))
    yield call([AuthServices, 'signIn'], payload)
    yield put(setAuthAction(true))
    yield put(userRequestAction())
    yield put(setStatusAction(false))
  } catch (error) {
    if (error.request.status === 400) {
      NotificationWindow({
        status: error.request.status,
        description: 'Вы уже в системе',
      })
    }
    if (error.request.status === 401) {
      NotificationWindow({
        status: error.request.status,
        type: 'error',
        description: 'Неверный логин или пароль',
      })
    }
    yield put(setStatusAction(false))
  }
}

function* sagaWorkerLoginOauth({ payload }: ActionLoginOauthTypes) {
  try {
    yield put(setStatusAction(true))
    yield call([OAuthService, 'signIn'], payload)
    yield put(setAuthAction(true))
    yield put(userRequestAction())
    yield put(setStatusAction(false))
  } catch (error) {
    if (error.request.status === 400) {
      NotificationWindow({
        status: error.request.status,
        description: 'Вы уже в системе',
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
      status: error.request.status,
      description: 'Что-то пошло не так!',
    })
    yield put(setStatusAction(false))
  }
}

function* sagaWorkerRegistration({ payload }: ActionRegistrationTypes) {
  try {
    yield put(setStatusAction(true))
    const responseUser: { data: { id: number } } = yield call([AuthServices, 'signUp'], payload)
    yield call([ThemeServices, 'registrationUser'], { userId: responseUser.data.id })
    yield put(setAuthAction(true))
    yield put(userRequestAction())
    yield put(setStatusAction(false))
  } catch (error) {
    NotificationWindow({
      status: error.request.status,
      description: 'Неверно введены данные!',
    })

    yield put(setStatusAction(false))
  }
}

export default function* sagaWatcher() {
  yield takeEvery(AUTH_LOGIN, sagaWorkerLogin)
  yield takeEvery(AUTH_REGISTRATION, sagaWorkerRegistration)
  yield takeEvery(AUTH_LOGOUT, sagaWorkerLogout)
  yield takeEvery(AUTH_LOGIN_OAUTH, sagaWorkerLoginOauth)
}
