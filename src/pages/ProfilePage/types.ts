import { RegistrationFormData } from '../RegistrationPage/types'

export type ProfileTypes ={
    display_name:string,
    email:string,
    first_name:string,
    login:string,
    phone:string,
    second_name:string,
}

export type ProfileFormData = {
  new_password: string
} & RegistrationFormData

export type ProfileFormDataKey = keyof ProfileFormData
