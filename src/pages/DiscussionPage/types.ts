import { Message } from 'ducks/forum/types'

export type TopicIdParams = {
  forumId: string
  topicId: string
}

export type DiscussionProps = {
  messages: Message[]
}
