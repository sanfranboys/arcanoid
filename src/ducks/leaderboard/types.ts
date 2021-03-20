import { Player } from 'pages/LeaderboardPage/types'

export type LeaderBoardState = {
  leaders: Player[]
  loading: boolean
}

export type SetLeadersAction = {
  type: string
  payload: LeaderBoardState
}

export type NewLeaderAction = {
  type: string
  payload: Player
}
