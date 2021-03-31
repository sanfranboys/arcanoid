import { ApiServices } from '../Api'
import { RegistrationTypes, UpdateThemeTypes } from './types'

export class Theme {
  APIService: ApiServices

  constructor(APIService: ApiServices) {
    this.APIService = APIService
  }

  registrationUser(data: RegistrationTypes) {
    return this.APIService.post('/theme/user/registration', data)
  }

  updateTheme(data: UpdateThemeTypes) {
    return this.APIService.post('/theme/user/update', data)
  }

  getUser(data: RegistrationTypes) {
    return this.APIService.post('/theme/user', data).then((res) => res.data)
  }

  getAllTheme() {
    return this.APIService.post('/theme').then((res) => res.data)
  }
}
