import React from 'react'
import { Page, ErrorPage } from '@/pages/'
import { Redirect, Route, Switch } from 'react-router-dom'
import { StartGame, GameProccess, FinishGame } from './components'
import './GameRoutePage.scss'

const GameRoutePage = () => (
  <Page>
    <div className="game">
      <Switch>
        <Route exact path="/game">
          <Redirect to="/game/start" />
        </Route>
        <Route exact path="/game/start">
          <StartGame />
        </Route>
        <Route exact path="/game/proccess">
          <GameProccess />
        </Route>
        <Route exact path="/game/finish">
          <FinishGame />
        </Route>
        <Route>
          <ErrorPage errorType={404} />
        </Route>
      </Switch>
    </div>
  </Page>
)

export default GameRoutePage
