import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'

type GuardedRouteProps = {
  component: FC<any>
}

// Route not allowed to visit authorized users to auth/register pages
const UnPrivateRoute: FC<GuardedRouteProps> = ({ component: Component }) => {
  // заглушка, эти данные будут браться из стейта или локалсторейджа.
  const auth = true

  return (
    <Route
      render={(props) =>
        auth ? (
          <Redirect to={{ pathname: '/game/start' }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default UnPrivateRoute
