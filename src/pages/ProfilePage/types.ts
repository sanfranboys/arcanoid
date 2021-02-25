import { RcFile } from 'antd/lib/upload'

export type ProfileTypes = {
  avatar: null | string
} & ChangeProfileDataTypes

export type ChangeProfileDataTypes = {
  display_name: string
  email: string
  first_name: string
  login: string
  phone: string
  second_name: string
}

type ChangeDataUser = {
  onSubmit: (data: ProfileTypes) => void
  changeAvatar: (file: RcFile) => string
}

export type ProfileFormDataKey = keyof ProfileTypes

export type ChangeProfileTypes = ProfileTypes & ChangeDataUser
