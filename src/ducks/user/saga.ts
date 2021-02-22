import { AuthServices, UserServices } from '@/services/'
import { takeEvery, put, call } from 'redux-saga/effects'
import { NotificationWindow } from '@/elements/'
import { useStorage } from '@/utils/'
import { ActionAvatar, ActionUser } from './types'
import { setAuthAction } from '../auth'
import { userSetStatusAction, userSuccessAction } from './actions'
import {
  USER_REQUEST,
  USER_UPDATE_PROFILE,
  USER_UPDATE_AVATAR,
} from './actionTypes'

const [setSorage] = useStorage()

function* sagaWorkerUser() {
  try {
    const data = yield call([AuthServices, 'getUserInfo'])
    yield put(setAuthAction(true))
    setSorage(true)
    yield put(userSuccessAction(data))
  } catch (error) {
    NotificationWindow({
      type: 'error',
      description: 'Что-то пошло не так!',
    })
    setSorage(false)
    yield put(setAuthAction(false))
    yield put(userSetStatusAction())
  }
}

function* sagaWorkerChangePrifile({ payload }: ActionUser) {
  try {
    NotificationWindow({
      description: 'Данные успешно изменены',
      type: 'success',
    })
    const res = yield call([UserServices, 'changeUserProfile'], payload)
    yield put(userSuccessAction(res.data))
  } catch (error) {
    NotificationWindow({
      description: 'Неверные заполнены поля',
      type: 'error',
    })
    yield put(userSetStatusAction())
  }
}

function* sagaWorkerChangeAvatar({ payload }: ActionAvatar) {
  try {
    NotificationWindow({
      description: 'Аватар успешно изменен',
      type: 'success',
    })
    const res = yield call([UserServices, 'changeUserAvatar'], payload)
    yield put(userSuccessAction(res.data))
  } catch (error) {
    NotificationWindow({
      description: 'Неверный формат изображения',
      type: 'error',
    })
    yield put(userSetStatusAction())
  }
}

export default function* sagaWatcher() {
  yield takeEvery(USER_REQUEST, sagaWorkerUser)
  yield takeEvery(USER_UPDATE_PROFILE, sagaWorkerChangePrifile)
  yield takeEvery(USER_UPDATE_AVATAR, sagaWorkerChangeAvatar)
}
