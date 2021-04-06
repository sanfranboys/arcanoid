import { ApiServices } from 'services/Api'
import { MessageRequest, TopicRequest } from './types'

export class Forum {
  APIService: ApiServices

  constructor(APIService: ApiServices) {
    this.APIService = APIService
  }

  getForums() {
    return this.APIService.get('/forums')
  }

  getForumById(id: number) {
    return this.APIService.get(`/forums/${id}`)
  }

  getTopicById(id: number) {
    return this.APIService.get(`/topics/${id}`)
  }

  createTopic(data: TopicRequest) {
    return this.APIService.post('/topics/new', data)
  }

  createMessage(data: MessageRequest) {
    return this.APIService.post('/messages/new', data)
  }
}
