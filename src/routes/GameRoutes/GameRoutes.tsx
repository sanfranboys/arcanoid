import React from 'react'
import {
  ErrorPage,
  StartGamePage,
  GameProccessPage,
  FinishGamePage,
} from 'pages/'
import { Redirect, Route, Switch } from 'react-router-dom'

const GameRoutes = () => (
  <Switch>
    <Route exact path="/game">
      <Redirect to="/game/start" />
    </Route>
    <Route exact path="/game/start">
      <StartGamePage />
    </Route>
    <Route exact path="/game/proccess">
      <GameProccessPage />
    </Route>
    <Route exact path="/game/finish">
      <FinishGamePage />
    </Route>
    <Route>
      <ErrorPage errorType={404} />
    </Route>
  </Switch>
)

export default GameRoutes
