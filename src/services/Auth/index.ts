import { NotificationWindow } from '@/elements/'
import { AuthFormData } from 'pages/AuthPage/types'
import { RegistrationFormData } from 'pages/RegistrationPage/types'
import { ApiServices } from '../Api'

export class Auth {
  APIService: ApiServices

  constructor(APIService: ApiServices) {
    this.APIService = APIService
  }

  signIn(data: AuthFormData) {
    return this.APIService.post('/auth/signin', data).then((res) => {
      if (res.status === 400) {
        NotificationWindow({
          description: 'Вы уже в системе',
        })
      }
      if (res.status === 401) {
        NotificationWindow({
          type: 'error',
          description: 'Неверный логин или пароль',
        })
      }
      if (res.status >= 200 && res.status < 299) {
        window.location.href = '/profile'
      }
    })
  }

  signUp(data: RegistrationFormData) {
    return this.APIService.post('/auth/signup', data).then((res) => {
      if (res.status === 400) {
        NotificationWindow({
          description: 'Неверно введены данные!',
        })
      }
      if (res.status >= 200 && res.status < 299) {
        window.location.href = '/profile'
      }
    })
  }

  getUserInfo() {
    return this.APIService.get('/auth/user').then((res) => {
      if (res.status >= 200 && res.status < 299) {
        return res.data
      }

      return res
    })
  }

  logOut() {
    return this.APIService.post('/auth/logout').then((res) => {
      if (res.status >= 200 && res.status < 299) {
        window.location.href = '/auth'
      }
      if (res.status > 399) {
        NotificationWindow({
          description: 'Что-то пошло не так!',
        })
      }
    })
  }
}
