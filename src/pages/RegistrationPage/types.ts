export type RegistrationFormData = {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string
}

export type RegistrationFormDataKey = keyof RegistrationFormData
