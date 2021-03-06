import { put, takeEvery, call, select } from 'redux-saga/effects'
import { NotificationWindow } from 'elements'
import { ForumServices } from 'services'
import {
  FORUM_CREATE_MESSAGES,
  FORUM_CREATE_TOPIC,
  FORUM_GET_FORUM,
  FORUM_GET_FORUMS,
  FORUM_GET_TOPIC,
  FORUM_UPDATE_MESSAGES,
} from './actionTypes'
import {
  forumSetForum,
  forumSetForums,
  forumSetStatus,
  forumSetTopic,
} from './actions'
import {
  ActionCreateMessage,
  ActionCreateTopic,
  ActionGetForum,
  ActionUpdateMessage,
} from './types'
import { getForum, getTopic } from './selectors'

function* sagaWorkerGetForums() {
  try {
    yield put(forumSetStatus('isLoading'))
    const data = yield call([ForumServices, 'getForums'])
    yield put(forumSetForums(data.data.forums))
    yield put(forumSetStatus('success'))
  } catch (error) {
    NotificationWindow({
      status: error.status,
      description: 'Что-то пошло не так',
    })
    yield put(forumSetStatus('idle'))
  }
}

function* sagaWorkerGetForumById({ payload }: ActionGetForum) {
  try {
    yield put(forumSetStatus('isLoading'))
    const data = yield call([ForumServices, 'getForumById'], payload)
    yield put(forumSetForum(data.data.forum))
    yield put(forumSetStatus('success'))
  } catch (error) {
    NotificationWindow({
      status: error.status,
      description: 'Что-то пошло не так',
    })
    yield put(forumSetStatus('idle'))
  }
}

function* sagaWorkerGetTopicById({ payload }: ActionGetForum) {
  try {
    yield put(forumSetStatus('isLoading'))
    const data = yield call([ForumServices, 'getTopicById'], payload)
    yield put(forumSetTopic(data.data.topic))
    yield put(forumSetStatus('success'))
  } catch (error) {
    NotificationWindow({
      status: error.status,
      description: 'Что-то пошло не так',
    })
    yield put(forumSetStatus('idle'))
  }
}

function* sagaWorkerCreateTopic({ payload }: ActionCreateTopic) {
  const forum = yield select(getForum)
  try {
    const { data } = yield call([ForumServices, 'createTopic'], payload)
    const { id, title } = data
    yield put(
      forumSetForum({
        ...forum,
        topics: [...forum.topics, { id, title, messagesCount: 0 }],
      })
    )
  } catch (error) {
    NotificationWindow({
      status: error.status,
      description: 'Что-то пошло не так',
    })
  }
}

function* sagaWorkerCreateMessages({ payload }: ActionCreateMessage) {
  const topic = yield select(getTopic)
  try {
    const { data } = yield call([ForumServices, 'createMessage'], payload)
    const { id, text, author, likes, dislikes, parentId, parentAuthor } = data
    yield put(
      forumSetTopic({
        ...topic,
        messages: [
          ...topic.messages,
          { id, text, author, likes, dislikes, parentId, parentAuthor },
        ],
      })
    )
  } catch (error) {
    NotificationWindow({
      status: error.status,
      description: 'Что-то пошло не так',
    })
  }
}

function* sagaWorkerUpdateMessages({ payload }: ActionUpdateMessage) {
  const topic = yield select(getTopic)
  try {
    yield call([ForumServices, 'updateMessage'], payload)
    const newArr = [...topic.messages]
    newArr.forEach((item, key) => {
      if (item.id === payload.id) {
        newArr[key] = { ...payload }
      }
    })

    yield put(
      forumSetTopic({
        ...topic,
        messages: newArr,
      })
    )
  } catch (error) {
    NotificationWindow({
      status: error.status,
      description: 'Что-то пошло не так',
    })
  }
}

export default function* sagaWatcher() {
  yield takeEvery(FORUM_GET_FORUMS, sagaWorkerGetForums)
  yield takeEvery(FORUM_GET_FORUM, sagaWorkerGetForumById)
  yield takeEvery(FORUM_GET_TOPIC, sagaWorkerGetTopicById)
  yield takeEvery(FORUM_CREATE_TOPIC, sagaWorkerCreateTopic)
  yield takeEvery(FORUM_CREATE_MESSAGES, sagaWorkerCreateMessages)
  yield takeEvery(FORUM_UPDATE_MESSAGES, sagaWorkerUpdateMessages)
}
