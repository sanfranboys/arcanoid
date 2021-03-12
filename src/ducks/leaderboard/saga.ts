import { takeEvery, put, call } from 'redux-saga/effects'
import { LeadersServices } from 'services'
import { getLeaderBoardPayload } from 'services/Leaders/types'
import { setIsLoading, setLeaders } from './actions'
import { LEADERBOARD_NEW, LEADERBOARD_REQUEST } from './actionTypes'
import { NewLeaderAction } from './types'
import { transformLeadersData, transformNewLeaderData } from './utils'

// ВЫНЕСТИ В КОНСТ ПОКА
const reqData: getLeaderBoardPayload = {
  ratingFieldName: 'sanfranScore',
  cursor: 0,
  limit: 10,
}

function* sagaWorkerGetLeaders() {
  try {
    yield put(setIsLoading(true))
    const res = yield call([LeadersServices, 'getLeaderboard'], reqData)
    yield put(setLeaders(transformLeadersData(res.data)))
    yield put(setIsLoading(false))
  } catch (error) {
    yield put(setIsLoading(false))
  }
}

function* sagaWorkerNewLeaders({ payload }: NewLeaderAction) {
  try {
    yield put(setIsLoading(true))
    yield call(
      [LeadersServices, 'setNewLeader'],
      transformNewLeaderData(payload)
    )
    yield put(setIsLoading(false))
  } catch (error) {
    yield put(setIsLoading(false))
  }
}

export default function* sagaWatcher() {
  yield takeEvery(LEADERBOARD_REQUEST, sagaWorkerGetLeaders)
  yield takeEvery(LEADERBOARD_NEW, sagaWorkerNewLeaders)
}
