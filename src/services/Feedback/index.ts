import { ApiServices } from 'services/Api'
import { NewFeedback, Feedback } from 'ducks/feedback/types'

const mock: Feedback[] = [
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

  // eslint-disable-next-line class-methods-use-this
  list() {
    return new Promise<Feedback[]>((resolve) => {
      setTimeout(() => resolve(mock), 1000)
    })
  }

  // eslint-disable-next-line class-methods-use-this
  create(data: NewFeedback) {
    return new Promise<Feedback>((resolve) => {
      setTimeout(
        // eslint-disable-next-line no-return-assign
        () =>
          resolve({
            id: mock.length + 1,
            ...data,
          }),
        1000
      )
    })
  }
}
