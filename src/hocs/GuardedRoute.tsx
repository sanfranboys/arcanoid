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
            <Component auth={!auth} {...props} />
          )
        }
      />
    )
  }

  return (
    <Route
      render={(props) =>
        auth ? (
          <Component auth={auth} {...props} />
        ) : (
          <Redirect to={{ pathname: '/auth' }} />
        )
      }
    />
  )
}

export default GuardedRoute
