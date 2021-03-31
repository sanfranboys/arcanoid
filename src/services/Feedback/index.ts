import { ApiServices } from 'services/Api'
import { Feedback } from 'ducks/feedback/types'

export class FeedbackApi {
  APIService: ApiServices

  constructor(APIService: ApiServices) {
    this.APIService = APIService
  }

  list() {
    return this.APIService.get('/feedbacks').then((response) => response.data)
  }

  create(data: Feedback) {
    return this.APIService.post('/feedbacks', data).then(
      (response) => response.data
    )
  }
}
