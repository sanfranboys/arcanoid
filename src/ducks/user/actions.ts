import { ChangeUserDataAction, UserTypes } from './types'
import {
  USER_FAILED,
  USER_REQUEST,
  USER_SUCCESS,
  USER_UPDATE_AVATAR,
  USER_UPDATE_PROFILE,
} from './actionTypes'

const userRequestAction = () => ({
  type: USER_REQUEST,
})

const userChangeProfileAction = (data: ChangeUserDataAction) => ({
  type: USER_UPDATE_PROFILE,
  payload: data,
})

const userChangeAvatarAction = (data: { avatar: FormData }) => ({
  type: USER_UPDATE_AVATAR,
  payload: data,
})

const userSuccessAction = (data: UserTypes) => ({
  type: USER_SUCCESS,
  payload: {
    user: data,
  },
})

const userFailedAction = (error: string) => ({
  type: USER_FAILED,
  payload: { error },
})

export {
  userRequestAction,
  userFailedAction,
  userSuccessAction,
  userChangeProfileAction,
  userChangeAvatarAction,
}
