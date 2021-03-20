import { Player } from 'pages/LeaderboardPage/types'

export type GetLeaderBoardPayload = {
  ratingFieldName: string
  cursor: number
  limit: number
}

export type SetLeaderBoardPayload = {
  data: Player
  ratingFieldName: string
}
