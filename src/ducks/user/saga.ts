import { AuthServices, ThemeServices, UserServices } from 'services'
import { takeEvery, put, call } from 'redux-saga/effects'
import { NotificationWindow } from 'elements'
import { changeThemeAction } from 'ducks'
import { ActionAvatar, ResponseApiService, SagaActionUser, UserTypes } from './types'
import { setAuthAction } from '../auth'
import { userSetStatusAction, userSuccessAction } from './actions'
import {
  USER_REQUEST,
  USER_UPDATE_PROFILE,
  USER_UPDATE_AVATAR,
} from './actionTypes'

function* sagaWorkerUser() {
  try {
    yield put(userSetStatusAction(true))
    const data: UserTypes = yield call([AuthServices, 'getUserInfo'])
     yield call([ThemeServices, 'registrationUser'], { userId: data.id })
    const themeClass:string = yield call([ThemeServices, 'getUserTheme'], { userId: data.id })
    yield put(changeThemeAction(themeClass))
    yield put(setAuthAction(true))
    yield put(userSuccessAction(data))
    yield put(userSetStatusAction(false))
  } catch (error) {
    yield put(setAuthAction(false))
    yield put(userSetStatusAction(false))
  }
}

function* sagaWorkerChangeProfile({ payload }: SagaActionUser) {
  try {
    yield put(userSetStatusAction(true))
    const res: ResponseApiService = yield call([UserServices, 'changeUserProfile'], payload)
    yield put(userSuccessAction(res.data))
    yield put(userSetStatusAction(false))
    NotificationWindow({
      status: res.status,
      description: 'Данные успешно изменены',
      type: 'success',
    })
  } catch (error) {
    yield put(userSetStatusAction(false))
    NotificationWindow({
      status: error.status,
      description: 'Неверные заполнены поля',
      type: 'error',
    })
  }
}

function* sagaWorkerChangeAvatar({ payload }: ActionAvatar) {
  try {
    yield put(userSetStatusAction(true))
    const res: ResponseApiService = yield call([UserServices, 'changeUserAvatar'], payload)
    yield put(userSuccessAction(res.data))
    yield put(userSetStatusAction(false))
    NotificationWindow({
      status: res.status,
      description: 'Аватар успешно изменен',
      type: 'success',
    })
  } catch (error) {
    yield put(userSetStatusAction(false))
    NotificationWindow({
      status: error.status,
      description: 'Неверный формат изображения',
      type: 'error',
    })
  }
}

export default function* sagaWatcher() {
  yield takeEvery(USER_REQUEST, sagaWorkerUser)
  yield takeEvery(USER_UPDATE_PROFILE, sagaWorkerChangeProfile)
  yield takeEvery(USER_UPDATE_AVATAR, sagaWorkerChangeAvatar)
}
