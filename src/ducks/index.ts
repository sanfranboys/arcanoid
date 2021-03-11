import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { sagaAuth, auth } from './auth'
import { sagaUser, user } from './user'

export * from './auth'
export * from './user'

export const createRootReducer = (history: History) =>
  combineReducers({
    auth,
    user,
    router: connectRouter(history),
  })

export function* saga() {
  yield all([fork(sagaUser), fork(sagaAuth)])
}
