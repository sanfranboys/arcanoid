export type ForumState = {
  forums: ForumWithTopicCounts[]
  activeForum: ForumWithTopicArray | null
  activeTopic: TopicItemWithArray | null
  status: 'isLoading' | 'success' | 'idle' | null
}

// FORUM ITEMS
export type ForumItem = {
  id: number
  title: string
}

export type ForumWithTopicCounts = ForumItem & {
  topicsCount: string
}

export type ForumWithTopicArray = ForumItem & {
  topics: TopicItemWithCounts[]
}

// TOPIC ITEMS
export type TopicItem = {
  id: number
  title: string
}

export type TopicItemWithCounts = TopicItem & {
  messagesCount: string
}

export type TopicItemWithArray = TopicItem & {
  messages: Message[]
}

export type Message = {
  id: number
  text: string
  author: string
  likes?: number
  dislikes?: number
  parentAuthor?: string
  children?: Message[]
  offset?: boolean
}

export type ActionGetForum = {
  type: string
  payload: number
}

export type ActionCreateTopic = {
  type: string
  payload: {
    title: string
    forumId: number
  }
}

export type ActionCreateMessage = {
  type: string
  payload: {
    text: string
    author: string
    likes: number
    dislikes: number
    topicId: number
  }
}

export type ActionUpdateMessage = {
  type: string
  payload: {
    id: number
    text: string
    author: string
    likes: number
    dislikes: number
  }
}
