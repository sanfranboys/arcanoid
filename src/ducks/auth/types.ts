export type AuthState = {
  isAuth: boolean
  loading: boolean
}

export type ActionAuth = {
  type: string
  payload: {}
}

export type ActionAuthLogin = {
  login: string
  password: string
}

export type ActionRegistration = {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export type ActionLoginTypes = {
  type: string
  payload: ActionAuthLogin
}

export type ActionLoginOauthTypes = {
  type: string
  payload: ActionOauthPayload
}

export type ActionRegistrationTypes = {
  type: string
  payload: ActionRegistration
}

export type ActionOauthPayload = { code: string }
