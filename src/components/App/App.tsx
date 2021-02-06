import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LeaderBordPage from '../../pages/LeaderBordPage'
import Content from '../Content'
import Layout from '../Layout'
import Header from '../Header'
import ProfilePage from '../../pages/ProfilePage'
import ForumPage from '../../pages/ForumPage'
import Nav from '../Nav'

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
            <h1>Arcanoid works well</h1>
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
          <Route>
            <h1>ErrorPage will be here</h1>
          </Route>
        </Switch>
      </Content>
    </Layout>
  </BrowserRouter>
)

export default App
