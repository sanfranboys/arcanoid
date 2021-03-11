export type LeaderBoardState = {
  leaders: Leader
  loading: boolean
}

export type Leader = Record<string, number>

export type LeaderAction = {
  type: string
  payload: LeaderBoardState
}
