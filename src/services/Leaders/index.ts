import { ApiServices } from 'services/Api'
import { GetLeaderBoardPayload, SetLeaderBoardPayload } from './types'

export class Leaders {
  APIService: ApiServices

  constructor(APIService: ApiServices) {
    this.APIService = APIService
  }

  getLeaderboard(data: GetLeaderBoardPayload) {
    return this.APIService.post('/leaderboard/all', data)
  }

  setNewLeader(data: SetLeaderBoardPayload) {
    return this.APIService.post('/leaderboard', data)
  }
}
