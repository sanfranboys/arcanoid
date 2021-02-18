import React, { FC } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Header, Content, Layout } from '@/elements/'
import {
  ErrorPage,
  AuthPage,
  ForumPage,
  LeaderboardPage,
  ProfilePage,
  RegistrationPage,
  GamePage,
  TopicPage,
  DiscussionPage,
} from '@/pages/'
import { Nav } from '@/components/'

import './App.scss'
import GuardedRoute from '@/hocs/'

const App: FC = () => (
  <BrowserRouter>
    <Layout>
      <Header>
        <Nav />
      </Header>
      <Content>
        <Switch>
          <Route exact path="/">
            <Redirect to="/auth" />
          </Route>
          <GuardedRoute component={GamePage} path="/game" />
          <GuardedRoute component={LeaderboardPage} path="/leaderboard" />
          <GuardedRoute component={ProfilePage} path="/profile" />
          <GuardedRoute component={ForumPage} path="/forum" />
          <GuardedRoute component={TopicPage} path="/forum/:forumId" />
          <GuardedRoute
            component={DiscussionPage}
            path="/forum/:forumId/:topicId"
          />
          <GuardedRoute component={AuthPage} path="/auth" nonAuth />
          <GuardedRoute
            component={RegistrationPage}
            path="/registration"
            nonAuth
          />
          <Route>
            <ErrorPage errorType={404} />
          </Route>
        </Switch>
      </Content>
    </Layout>
  </BrowserRouter>
)

export default App
