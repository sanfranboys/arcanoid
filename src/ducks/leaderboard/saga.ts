import { takeEvery, put, call } from 'redux-saga/effects'
import { LeadersServices } from 'services'
import { getLeaderBoardPayload } from 'services/Leaders/types'
import { setLeaders, setIsLoading } from './actions'
import { LEADERBOARD_REQUEST } from './actionTypes'

// ВЫНЕСТИ В КОНСТ ПОКА
const reqData: getLeaderBoardPayload = {
  ratingFieldName: 'sanfranoid',
  cursor: 0,
  limit: 10,
}

function* sagaWorkerGetLeaders() {
  try {
    yield put(setIsLoading(true))
    const data = yield call([LeadersServices, 'getLeaderboard'], reqData)
    console.log('data', data)
    yield put(setLeaders(data))
    yield put(setIsLoading(false))
  } catch (error) {
    yield put(setIsLoading(false))
  }
}

// function* sagaWorkerSetLeaders({ payload }: LeaderAction) {
//   try {
//     yield put(userSetStatusAction(true))
//     const data = yield call([AuthServices, 'getUserInfo'])
//   } catch (error) {
//     yield put(userSetStatusAction(false))
//   }
// }

export default function* sagaWatcher() {
  yield takeEvery(LEADERBOARD_REQUEST, sagaWorkerGetLeaders)
  // yield takeEvery(LEADERBOARD_SET, sagaWorkerSetLeaders)
}
