import { takeEvery, put, call } from 'redux-saga/effects'
import { FeedbackServices } from 'services'
import { setFeedbacks, fetchFeedbacks } from './actions'
import { FEEDBACK_FETCH, FEEDBACK_CREATE } from './actionTypes'
import { CreateFeedbackAction } from './types'

function* sagaWorkerFetchFeedbacks() {
  try {
    const feedbackList = yield call([FeedbackServices, 'list'])

    yield put(
      setFeedbacks(
        feedbackList.map((item: { _id: string }) => ({ ...item, id: item._id }))
      )
    )
  } catch (error) {
    console.log(error)
  }
}

function* sagaWorkerCreateFeedback({ payload }: CreateFeedbackAction) {
  try {
    yield call([FeedbackServices, 'create'], payload)
    yield put(fetchFeedbacks())
  } catch (error) {
    console.log(error)
  }
}

export default function* sagaWatcher() {
  yield takeEvery(FEEDBACK_FETCH, sagaWorkerFetchFeedbacks)
  yield takeEvery(FEEDBACK_CREATE, sagaWorkerCreateFeedback)
}
