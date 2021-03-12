import { Player } from 'pages/LeaderboardPage/types'

export type getLeaderBoardPayload = {
  ratingFieldName: string
  cursor: number
  limit: number
}

export type setLeaderBoardPayload = {
  data: Player
  ratingFieldName: string
}
