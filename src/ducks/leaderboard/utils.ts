import { setLeaderBoardPayload } from 'services/Leaders/types'

// TODO убрать any
export function transformLeadersData(data: any): any {
  return data.map((item: setLeaderBoardPayload) => item.data)
}

// TODO убрать any
export function transformNewLeaderData(data: any): any {
  return { data, ratingFieldName: 'sanfranScore' }
}
