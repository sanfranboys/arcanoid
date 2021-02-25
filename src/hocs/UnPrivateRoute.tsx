import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getIsAuth, getIsLoadingAuth } from 'ducks'
import { useSelector } from 'react-redux'

type GuardedRouteProps = {
  component: FC<any>
  path: string
}

// Route not allowed to visit authorized users to auth/register pages
const UnPrivateRoute: FC<GuardedRouteProps> = ({ component: Component }) => {
  const isAuth: boolean = useSelector(getIsAuth)
  const isLoading: boolean = useSelector(getIsLoadingAuth)
  return (
    <Route
      render={(props) =>
        isAuth && !isLoading ? (
          <Redirect to={{ pathname: '/game/start' }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default UnPrivateRoute
