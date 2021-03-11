export type getLeaderBoardPayload = {
  ratingFieldName: string
  cursor: number
  limit: number
}

export type setLeaderBoardPayload = {
  data: {
    sanfranoid: Record<string, number>
  }
  ratingFieldName: string
}
