import { ApiServices } from 'services/Api'
import { getLeaderBoardPayload, setLeaderBoardPayload } from './types'

export class Leaders {
  APIService: ApiServices

  constructor(APIService: ApiServices) {
    this.APIService = APIService
  }

  getLeaderboard(data: getLeaderBoardPayload) {
    return this.APIService.post('/leaderboard/all', data)
  }

  setNewLeader(data: setLeaderBoardPayload) {
    return this.APIService.post('/leaderboard', data)
  }
}
