import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getStorage } from '@/utils/'

type GuardedRouteProps = {
  component: FC<any>
}

const PrivateRoute: FC<GuardedRouteProps> = ({ component: Component }) => {
  // заглушка, эти данные будут браться из стейта или локалсторейджа.

  const isAuth: boolean = getStorage()

  return (
    <Route
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/auth' }} />
        )
      }
    />
  )
}

export default PrivateRoute
