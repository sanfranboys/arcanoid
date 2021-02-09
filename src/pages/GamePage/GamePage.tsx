import React from 'react'
import { Page } from '@/pages/'
import { Redirect, Route, Switch } from 'react-router-dom'
import { StartGame, GameProccess, FinishGame } from './components'

const GamePage = () => (
  <Page>
    <Switch>
      <Route exact path="/game">
        <Redirect to="/game/start" />
      </Route>
      <Route path="/game/start">
        <StartGame />
      </Route>
      <Route path="/game/proccess">
        <GameProccess />
      </Route>
      <Route path="/game/finish">
        <FinishGame />
      </Route>
    </Switch>
  </Page>
)

export default GamePage
