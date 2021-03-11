import { Leader } from 'pages/LeaderboardPage/types'
import {
  LEADERBOARD_SET,
  LEADERBOARD_REQUEST,
  LEADERBOARD_SET_ISLOADING,
} from './actionTypes'

const setLeaders = (payload: Leader) => ({
  type: LEADERBOARD_SET,
  payload,
})

const requestLeaders = () => ({
  type: LEADERBOARD_REQUEST,
})

const setIsLoading = (payload: boolean) => ({
  type: LEADERBOARD_SET_ISLOADING,
  payload,
})

export { setLeaders, requestLeaders, setIsLoading }
