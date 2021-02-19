import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'

type GuardedRouteProps = {
  component: FC<any>
  nonAuth?: boolean
}

const GuardedRoute: FC<GuardedRouteProps> = ({
  component: Component,
  nonAuth,
}) => {
  // заглушка, эти данные будут браться из стейта или локалсторейджа.
  const auth = true

  if (nonAuth) {
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

  return (
    <Route
      render={(props) =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/auth' }} />
        )
      }
    />
  )
}

export default GuardedRoute
