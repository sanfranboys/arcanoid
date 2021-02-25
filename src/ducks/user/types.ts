export type ChangeUserDataAction = {
  display_name: string
  email: string
  first_name: string
  login: string
  phone: string
  second_name: string
}

export type UserTypes = {
  avatar: string
} & ChangeUserDataAction

export type UserState = {
  user: UserTypes
  loading: boolean
}

export type SagaActionUser = {
  type: string
  payload: ChangeUserDataAction
}
export type ActionUser = {
  type: string
  payload: UserState
}

export type ActionAvatar = {
  type: string
  payload: FormData
}
