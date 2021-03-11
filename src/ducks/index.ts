import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { sagaAuth, auth } from './auth'
import { sagaUser, user } from './user'
import { sagaLeaderBoard, leaderboard } from './leaderboard'

export * from './auth'
export * from './user'
export * from './leaderboard'

export const rootReducers = combineReducers({
  auth,
  user,
  leaderboard,
})

export function* saga() {
  yield all([fork(sagaUser), fork(sagaAuth), fork(sagaLeaderBoard)])
}
