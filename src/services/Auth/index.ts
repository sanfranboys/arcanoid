import { AuthFormData } from 'pages/AuthPage/types'
import { RegistrationFormData } from 'pages/RegistrationPage/types'
import { ApiServices } from '../Api'

export class Auth {
  APIService: ApiServices

  constructor(APIService: ApiServices) {
    this.APIService = APIService
  }

  signIn(data: AuthFormData) {
    return this.APIService.post('/auth/signin', data)
  }

  signUp(data: RegistrationFormData) {
    return this.APIService.post('/auth/signup', data)
  }

  getUserInfo() {
    return this.APIService.get('/auth/user').then((res) => res.data)
  }

  logOut() {
    return this.APIService.post('/auth/logout')
  }
}
