export type TopicRequest = {
  title: string
  forumId: number
}

export type MessageRequest = {
  text: string
  author: string
  topicId: number
}
