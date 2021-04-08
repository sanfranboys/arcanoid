import { FeedbackState, SetFeedbacksAction } from './types'
import { FEEDBACK_SET } from './actionTypes'

export const initialState: FeedbackState = {
  data: [],
  loading: false,
}

const reducer = (state = initialState, action: SetFeedbacksAction) => {
  switch (action.type) {
    case FEEDBACK_SET:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}

export default reducer
