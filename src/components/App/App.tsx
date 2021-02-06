import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LeaderBordPage from '../../pages/LeaderBordPage'
import Content from '../Content'
import Layout from '../Layout'
import Header from '../Header'
import './App.scss'

const App: FC = () => (
  <BrowserRouter>
    <Layout>
      <Header>Меню</Header>
      <Content>
        <Switch>
          <Route exact path="/">
            <h1>Arcanoid works well</h1>
          </Route>
          <Route path="/leaderboard">
            <LeaderBordPage />
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
