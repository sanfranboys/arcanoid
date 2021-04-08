import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  ErrorPage,
  AuthPage,
  LeaderboardPage,
  ProfilePage,
  RegistrationPage,
  FeedbackPage,
} from 'pages/'

import { PrivateRoute, UnPrivateRoute } from 'hocs/'
import { ForumRoutes, GameRoutes, RootRedirectRoute } from 'routes/'

const RootRoutes = () => (
  <Switch>
    <Route exact path="/">
      <RootRedirectRoute />
    </Route>
    <PrivateRoute component={GameRoutes} path="/game" />
    <PrivateRoute component={LeaderboardPage} path="/leaderboard" />
    <PrivateRoute component={ProfilePage} path="/profile" />
    <PrivateRoute component={ForumRoutes} path="/forum" />
    <PrivateRoute component={FeedbackPage} path="/feedback" />
    <UnPrivateRoute component={AuthPage} path="/auth" />
    <UnPrivateRoute component={RegistrationPage} path="/registration" />
    <Route>
      <ErrorPage errorType={404} />
    </Route>
  </Switch>
)

export default RootRoutes
