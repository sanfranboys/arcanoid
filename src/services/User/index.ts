import { ApiServices } from 'services/Api'
import { ChangeProfileDataTypes } from 'pages/ProfilePage/types'

export class User {
  APIService: ApiServices

  constructor(APIService: ApiServices) {
    this.APIService = APIService
  }

  changeUserProfile(data: ChangeProfileDataTypes) {
    return this.APIService.put('/user/profile', data)
  }

  changeUserAvatar(data: { avatar: FormData }) {
    return this.APIService.put('/user/profile/avatar', data)
  }
}
