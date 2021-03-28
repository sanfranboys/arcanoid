import { takeEvery, put, call, select } from 'redux-saga/effects'
import { FeedbackServices } from 'services'
import { setFeedbacks } from './actions'
import { FEEDBACK_FETCH, FEEDBACK_CREATE } from './actionTypes'
import { CreateFeedbackAction } from './types'
import { getFeedbacks } from './selectors'

function* sagaWorkerFetchFeedbacks() {
  try {
    const res = yield call([FeedbackServices, 'list'])
    yield put(setFeedbacks(res))
  } catch (error) {
    console.log(error)
  }
}

function* sagaWorkerCreateFeedback({ payload }: CreateFeedbackAction) {
  try {
    const newFeedback = yield call([FeedbackServices, 'create'], payload)

    let feedbacks = yield select(getFeedbacks)
    feedbacks = [...feedbacks]
    feedbacks.push(newFeedback)

    yield put(setFeedbacks(feedbacks))
  } catch (error) {
    console.log(error)
  }
}

export default function* sagaWatcher() {
  yield takeEvery(FEEDBACK_FETCH, sagaWorkerFetchFeedbacks)
  yield takeEvery(FEEDBACK_CREATE, sagaWorkerCreateFeedback)
}
