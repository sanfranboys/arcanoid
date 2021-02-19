import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import {
  ErrorPage,
  AuthPage,
  LeaderboardPage,
  ProfilePage,
  RegistrationPage,
} from '@/pages/'

import GuardedRoute from '@/hocs/'
import { ForumRoutes, GameRoutes } from '@/routes/'

const RootRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/auth" />
    </Route>
    <GuardedRoute component={GameRoutes} path="/game" />
    <GuardedRoute component={LeaderboardPage} path="/leaderboard" />
    <GuardedRoute component={ProfilePage} path="/profile" />
    <GuardedRoute component={ForumRoutes} path="/forum" />
    <GuardedRoute component={AuthPage} path="/auth" nonAuth />
    <GuardedRoute component={RegistrationPage} path="/registration" nonAuth />
    <Route>
      <ErrorPage errorType={404} />
    </Route>
  </Switch>
)

export default RootRoutes
