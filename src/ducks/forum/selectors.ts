import { createSelector } from 'reselect'
import { Store } from '../types'
import { ForumState } from './types'

const forumState = (state: Store): ForumState => state.forum
export const getForums = createSelector(forumState, (state) => state.forums)
export const getForum = createSelector(forumState, (state) => state.activeForum)
export const getTopic = createSelector(forumState, (state) => state.activeTopic)
export const getStatus = createSelector(forumState, (state) => state.status)
