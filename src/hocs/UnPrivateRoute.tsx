import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getIsAuth } from '@/ducks'
import { useSelector } from 'react-redux'

type GuardedRouteProps = {
  component: FC<any>
}

// Route not allowed to visit authorized users to auth/register pages
const UnPrivateRoute: FC<GuardedRouteProps> = ({ component: Component }) => {
  const isAuth: boolean = useSelector(getIsAuth)
  return (
    <Route
      render={(props) =>
        isAuth ? (
          <Redirect to={{ pathname: '/game/start' }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default UnPrivateRoute
