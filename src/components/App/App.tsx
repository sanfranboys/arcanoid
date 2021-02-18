import React, { FC } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Header, Content, Layout } from '@/elements/'
import {
  ErrorPage,
  AuthPage,
  ForumRoutePage,
  LeaderboardPage,
  ProfilePage,
  RegistrationPage,
  GameRoutePage,
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
          <GuardedRoute component={GameRoutePage} path="/game" />
          <GuardedRoute component={LeaderboardPage} path="/leaderboard" />
          <GuardedRoute component={ProfilePage} path="/profile" />
          <GuardedRoute component={ForumRoutePage} path="/forum" />
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
