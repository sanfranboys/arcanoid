import { createSelector } from 'reselect'
import { Store } from '../types'
import { FeedbackState } from './types'

const feedbackState = (state: Store): FeedbackState => state.feedback

export const getFeedbacks = createSelector(feedbackState, (state) => state.data)
export const isLoadingFeedbacks = createSelector(
  feedbackState,
  (state) => state.loading
)
