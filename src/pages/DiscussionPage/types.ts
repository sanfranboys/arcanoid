export type Message = {
  id: number
  text: string
  author: string
}

export type TopicIdParams = {
  forumId: string
  topicId: string
}

export type DiscussionProps = {
  messages: Message[]
}
