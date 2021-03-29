import { ApiServices } from 'services/Api'
import { NewFeedback, Feedback } from 'ducks/feedback/types'

export const mock: Feedback[] = [
  {
    id: 1,
    text: 'Очень крутой!',
    author: 'Alexey',
  },
  {
    id: 2,
    text: 'Лучше видел',
    author: 'IvanovA',
  },
  {
    id: 3,
    text: 'Если закрыть монитор подушкой, то норм',
    author: 'PetraPetr',
  },
]

export class FeedbackApi {
  APIService: ApiServices

  constructor(APIService: ApiServices) {
    this.APIService = APIService
  }

  list() {
    return this.APIService.get('/feedbacks').then((res) => res.data)
  }

  create(data: NewFeedback) {
    return this.APIService.post('/feedbacks', data).then((res) => res.data)
  }
}
