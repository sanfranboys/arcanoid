import { AuthFormData } from 'pages/AuthPage/types'
import { ApiServices } from 'services/Api'
import { NotificationWindow } from '@/elements/'

export class User {
  APIService: ApiServices

  constructor(APIService: ApiServices) {
    this.APIService = APIService
  }

  changeUserProfile(data: AuthFormData) {
    return this.APIService.put('/user/profile', data).then((res) => {
      if (res.status >= 200 && res.status < 299) {
        NotificationWindow({
          description: 'Данные успешно изменены',
          type: 'success',
        })
        return res.data
      }
      NotificationWindow({
        description: 'Неверные заполнены поля',
        type: 'error',
      })
      return res
    })
  }

  changeUserAvatar(data: {}) {
    return this.APIService.put('/user/profile/avatar', data).then((res) => {
      if (res.status >= 200 && res.status < 299) {
        NotificationWindow({
          description: 'Аватар успешно изменен',
          type: 'success',
        })
        return res.data
      }
      NotificationWindow({
        description: 'Неверный формат изображения',
        type: 'error',
      })
      return res
    })
  }
}
