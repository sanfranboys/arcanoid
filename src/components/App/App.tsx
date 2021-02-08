import React, { FC } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import ErrorPage from '../../pages/ErrorPage'
import AuthPage from '../../pages/AuthPage'
import ForumPage from '../../pages/ForumPage'
import LeaderBordPage from '../../pages/LeaderBordPage'
import Content from '../../elements/Content'
import Layout from '../../elements/Layout'
import Header from '../../elements/Header'
import ProfilePage from '../../pages/ProfilePage'
import Nav from '../Nav'

import './App.scss'
import RegistrationPage from '../../pages/RegistrationPage'

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
          <Route path="/registration">
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
