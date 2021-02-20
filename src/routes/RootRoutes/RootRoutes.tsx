import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import {
  ErrorPage,
  AuthPage,
  LeaderboardPage,
  ProfilePage,
  RegistrationPage,
} from '@/pages/'

import { PrivateRoute, UnPrivateRoute } from '@/hocs/'
import { ForumRoutes, GameRoutes } from '@/routes/'

const RootRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/auth" />
    </Route>
    <PrivateRoute component={GameRoutes} path="/game" />
    <PrivateRoute component={LeaderboardPage} path="/leaderboard" />
    <PrivateRoute component={ProfilePage} path="/profile" />
    <PrivateRoute component={ForumRoutes} path="/forum" />
    <UnPrivateRoute component={AuthPage} path="/auth" nonAuth />
    <UnPrivateRoute component={RegistrationPage} path="/registration" nonAuth />
    <Route>
      <ErrorPage errorType={404} />
    </Route>
  </Switch>
)

export default RootRoutes
