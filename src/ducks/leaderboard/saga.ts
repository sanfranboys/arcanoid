import { takeEvery, put, call } from 'redux-saga/effects'
import { LeadersServices } from 'services'
import { getLeaderBoardPayload } from 'services/Leaders/types'
import { setLeaders } from './actions'
import { LEADERBOARD_NEW, LEADERBOARD_REQUEST } from './actionTypes'
import { NewLeaderAction } from './types'
import { transformLeadersData, transformNewLeaderData } from './utils'

// ВЫНЕСТИ В КОНСТ ПОКА
const initialReqData: getLeaderBoardPayload = {
  ratingFieldName: 'sanfranScore',
  cursor: 0,
  limit: 10,
}

function* sagaWorkerGetLeaders() {
  try {
    const res = yield call([LeadersServices, 'getLeaderboard'], initialReqData)
    yield put(setLeaders(transformLeadersData(res.data)))
  } catch (error) {
    console.log(error)
  }
}

function* sagaWorkerNewLeaders({ payload }: NewLeaderAction) {
  try {
    yield call(
      [LeadersServices, 'setNewLeader'],
      transformNewLeaderData(payload)
    )
  } catch (error) {
    console.log(error)
  }
}

export default function* sagaWatcher() {
  yield takeEvery(LEADERBOARD_REQUEST, sagaWorkerGetLeaders)
  yield takeEvery(LEADERBOARD_NEW, sagaWorkerNewLeaders)
}
