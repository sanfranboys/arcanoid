export type NewFeedback = Omit<Feedback, 'id'>

export type Feedback = {
  id: number
  author: string
  text: string
}

export type FeedbackState = {
  data: Feedback[]
  loading: boolean
}

export type SetFeedbacksAction = {
  type: string
  payload: FeedbackState
}

export type CreateFeedbackAction = {
  type: string
  payload: Feedback
}
