import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { sagaAuth, auth } from './auth'
import { sagaUser, user } from './user'

export * from './auth'
export * from './user'

export const rootReducers = combineReducers({
  auth,
  user,
})

export function* saga() {
  yield all([fork(sagaUser), fork(sagaAuth)])
}
