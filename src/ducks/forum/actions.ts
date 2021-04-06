import { MessageRequest, TopicRequest } from 'services/Forum/types'
import {
  FORUM_CREATE_MESSAGES,
  FORUM_CREATE_TOPIC,
  FORUM_GET_FORUM,
  FORUM_GET_FORUMS,
  FORUM_GET_TOPIC,
  FORUM_SET_TOPIC,
  FORUM_SET_FORUMS,
  FORUM_SET_STATUS,
  FORUM_SET_FORUM,
} from './actionTypes'
import { ForumWithTopicArray, ForumWithTopicCounts } from './types'

const forumGetForums = () => ({
  type: FORUM_GET_FORUMS,
})

const forumSetForums = (payload: ForumWithTopicCounts[]) => ({
  type: FORUM_SET_FORUMS,
  payload,
})
const forumSetStatus = (status: 'isLoading' | 'success' | 'idle') => ({
  type: FORUM_SET_STATUS,
  payload: status,
})

const forumGetForum = (id: number) => ({
  type: FORUM_GET_FORUM,
  payload: id,
})

const forumSetForum = (payload: ForumWithTopicArray) => ({
  type: FORUM_SET_FORUM,
  payload,
})

const forumGetTopic = (id: number) => ({
  type: FORUM_GET_TOPIC,
  payload: id,
})

const forumSetTopic = (id: number) => ({
  type: FORUM_SET_TOPIC,
  payload: id,
})

const createTopic = (data: TopicRequest) => ({
  type: FORUM_CREATE_TOPIC,
  payload: data,
})

const createMessage = (data: MessageRequest) => ({
  type: FORUM_CREATE_MESSAGES,
  payload: data,
})

export {
  forumGetForums,
  forumSetStatus,
  forumGetForum,
  forumGetTopic,
  forumSetTopic,
  forumSetForum,
  createTopic,
  createMessage,
  forumSetForums,
}
