import { Player } from 'pages/LeaderboardPage/types'
import {
  LEADERBOARD_SET,
  LEADERBOARD_NEW,
  LEADERBOARD_REQUEST,
} from './actionTypes'

const setLeaders = (payload: Player[]) => ({
  type: LEADERBOARD_SET,
  payload,
})

const postNewLeader = (payload: Player) => ({
  type: LEADERBOARD_NEW,
  payload,
})

const requestLeaders = () => ({
  type: LEADERBOARD_REQUEST,
})

export { setLeaders, requestLeaders, postNewLeader }
