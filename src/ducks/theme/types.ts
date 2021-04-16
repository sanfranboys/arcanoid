export type ThemeState = {
  theme: string
  loading: boolean
}

export type ActionTheme = {
  type: string
  payload: {}
}

export type RequestThemeType = {
  userId: number,
  theme: number | string
}

export type UserIdType = {
  userId: number,
}

export type ActionRegistrationUserTypes = {
  type: string
  payload: UserIdType
}
export type ActionRequestThemeTypes = {
  type: string
  payload: RequestThemeType
}
