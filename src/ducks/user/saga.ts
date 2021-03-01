import { AuthServices, UserServices } from 'services'
import { takeEvery, put, call } from 'redux-saga/effects'
import { NotificationWindow } from 'elements'
import { ActionAvatar, SagaActionUser } from './types'
import { setAuthAction } from '../auth'
import { userSetStatusAction, userSuccessAction } from './actions'
import {
  USER_REQUEST,
  USER_UPDATE_PROFILE,
  USER_UPDATE_AVATAR,
} from './actionTypes'

function* sagaWorkerUser() {
  try {
    const data = yield call([AuthServices, 'getUserInfo'])
    yield put(setAuthAction(true))
    yield put(userSuccessAction(data))
  } catch (error) {
    yield put(setAuthAction(false))
    yield put(userSetStatusAction())
  }
}

function* sagaWorkerChangeProfile({ payload }: SagaActionUser) {
  try {
    const res = yield call([UserServices, 'changeUserProfile'], payload)
    NotificationWindow({
      description: 'Данные успешно изменены',
      type: 'success',
    })
    yield put(userSuccessAction(res.data))
  } catch (error) {
    if (error.status > 399) {
      NotificationWindow({
        description: 'Неверные заполнены поля',
        type: 'error',
      })
    }
    yield put(userSetStatusAction())
  }
}

function* sagaWorkerChangeAvatar({ payload }: ActionAvatar) {
  try {
    const res = yield call([UserServices, 'changeUserAvatar'], payload)
    NotificationWindow({
      description: 'Аватар успешно изменен',
      type: 'success',
    })
    yield put(userSuccessAction(res.data))
  } catch (error) {
    if (error.status > 399) {
      NotificationWindow({
        description: 'Неверный формат изображения',
        type: 'error',
      })
    }
    yield put(userSetStatusAction())
  }
}

export default function* sagaWatcher() {
  yield takeEvery(USER_REQUEST, sagaWorkerUser)
  yield takeEvery(USER_UPDATE_PROFILE, sagaWorkerChangeProfile)
  yield takeEvery(USER_UPDATE_AVATAR, sagaWorkerChangeAvatar)
}
