import { ApiServices } from '../Api'

export class OAuth {
  APIService: ApiServices

  constructor(APIService: ApiServices) {
    this.APIService = APIService
  }

  signIn(data: { code: string }) {
    return this.APIService.post('/oauth/yandex', data)
  }

  getServiceId() {
    return this.APIService.get('/oauth/yandex/service-id')
  }
}
