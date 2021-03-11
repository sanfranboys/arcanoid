import { ApiServices } from 'services/Api'
import { getLeaderBoardPayload, setLeaderBoardPayload } from './types'

export class Leaders {
  APIService: ApiServices

  constructor(APIService: ApiServices) {
    this.APIService = APIService
  }

  getLeaderboard(data: getLeaderBoardPayload) {
    return this.APIService.post('/leaderboard/all', data).then(
      (e) => e.data[0].data.sanfranoid
    )
  }

  setLeaderboard(data: setLeaderBoardPayload) {
    return this.APIService.post('/leaderboard/all', data)
  }
}
