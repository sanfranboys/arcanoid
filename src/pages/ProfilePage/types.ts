import { RegistrationFormData } from '../RegistrationPage/types'

export type ProfileFormData = {
  new_password: string
} & RegistrationFormData

export type ProfileFormDataKey = keyof ProfileFormData
