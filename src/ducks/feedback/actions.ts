import { FEEDBACK_CREATE, FEEDBACK_FETCH, FEEDBACK_SET } from './actionTypes'
import { NewFeedback, Feedback } from './types'

const setFeedbacks = (payload: Feedback[]) => ({
  type: FEEDBACK_SET,
  payload,
})

const createFeedback = (payload: NewFeedback) => ({
  type: FEEDBACK_CREATE,
  payload,
})

const fetchFeedbacks = () => ({
  type: FEEDBACK_FETCH,
})

export { setFeedbacks, createFeedback, fetchFeedbacks }
