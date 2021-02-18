import React from 'react'
import { TopicPage, DiscussionPage, ForumsPage } from '@/pages/'
import { Route, Switch } from 'react-router-dom'

const ForumRoutePage = () => (
  <Switch>
    <Route exact path="/forum">
      <ForumsPage />
    </Route>
    <Route exact path="/forum/:forumId">
      <TopicPage />
    </Route>
    <Route exact path="/forum/:forumId/:topicId">
      <DiscussionPage />
    </Route>
  </Switch>
)

export default ForumRoutePage