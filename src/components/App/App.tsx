import React, { FC } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Header, Content, Layout } from '@/elements/'
import {
  ErrorPage,
  AuthPage,
  ForumPage,
  LeaderBordPage,
  ProfilePage,
  RegistrationPage,
} from '@/pages/'
import { Nav } from '@/components/'

import './App.scss'

const App: FC = () => (
  <BrowserRouter>
    <Layout>
      <Header>
        <Nav />
      </Header>
      <Content>
        <Switch>
          <Route exact path="/">
            {/* Пока просто редирект без условия */}
            <Redirect to="/auth" />
          </Route>
          <Route path="/leaderboard">
            <LeaderBordPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/forum">
            <ForumPage />
          </Route>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/reg">
            <RegistrationPage />
          </Route>
          <Route>
            <ErrorPage errorType={404} />
          </Route>
        </Switch>
      </Content>
    </Layout>
  </BrowserRouter>
)

export default App
