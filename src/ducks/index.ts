import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { sagaAuth, auth } from './auth'
import { sagaUser, user } from './user'
import { sagaLeaderBoard, leaderboard } from './leaderboard'
import { sagaTheme, theme } from './theme'
import { sagaForum, forum } from './forum'
import { sagaFeedback, feedback } from './feedback'

export * from './theme'
export * from './auth'
export * from './user'
export * from './leaderboard'
export * from './forum'
export * from './feedback'

export const createRootReducer = (history: History) =>
  combineReducers({
    auth,
    user,
    leaderboard,
    theme,
    forum,
    feedback,
    router: connectRouter(history),
  })

export function* saga() {
  yield all([
    fork(sagaUser),
    fork(sagaAuth),
    fork(sagaLeaderBoard),
    fork(sagaTheme),
    fork(sagaForum),
    fork(sagaFeedback),
  ])
}
