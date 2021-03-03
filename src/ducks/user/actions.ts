import { ChangeUserDataAction, UserTypes } from './types'
import {
  USER_SET_STATUS,
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

const userChangeAvatarAction = (avatar: FormData) => ({
  type: USER_UPDATE_AVATAR,
  payload: avatar,
})

const userSuccessAction = (data: UserTypes) => ({
  type: USER_SUCCESS,
  payload: {
    user: data,
  },
})

const userSetStatusAction = (payload: boolean) => ({
  type: USER_SET_STATUS,
  payload,
})

export {
  userRequestAction,
  userSetStatusAction,
  userSuccessAction,
  userChangeProfileAction,
  userChangeAvatarAction,
}
