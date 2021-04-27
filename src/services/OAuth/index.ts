import { APP_URL } from '@/constants'
import { NotificationWindow } from 'elements'
import { ApiServices } from '../Api'
import { getOAuthURL } from './utils'

export class OAuth {
  APIService: ApiServices

  constructor(APIService: ApiServices) {
    this.APIService = APIService
  }

  signIn(data: { code: string }) {
    return this.APIService.post('/oauth/yandex', data)
  }

  getServiceId() {
    return this.APIService.get(
      `/oauth/yandex/service-id?redirect_uri=${APP_URL}`
    ).then(({ data }) => {
      if (data.service_id) {
        window.location.href = getOAuthURL(data.service_id)
      } else {
        NotificationWindow({
          status: 5,
          description:
            'Не удается получить id приложения, попробуйте другой способ авторизации',
          type: 'error',
        })
      }
    })
  }
}
