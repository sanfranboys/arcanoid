import React from 'react'
import { TopicPage, DiscussionPage, ForumPage } from 'pages/'
import { Route, Switch } from 'react-router-dom'

const ForumRoutes = () => (
  <Switch>
    <Route exact path="/forum">
      <ForumPage />
    </Route>
    <Route exact path="/forum/:forumId">
      <TopicPage />
    </Route>
    <Route exact path="/forum/:forumId/:topicId">
      <DiscussionPage />
    </Route>
  </Switch>
)

export default ForumRoutes
