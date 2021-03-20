import { Player } from 'pages/LeaderboardPage/types'
import { SetLeaderBoardPayload } from 'services/Leaders/types'

type transformLeadersDataProps = { data: Player }[]

export function transformLeadersData(data: transformLeadersDataProps) {
  return data.map((item: SetLeaderBoardPayload) => item.data)
}

export function transformNewLeaderData(data: Player) {
  return { data, ratingFieldName: 'sanfranScore' }
}
