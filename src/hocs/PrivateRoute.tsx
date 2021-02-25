import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsAuth } from 'ducks'

type GuardedRouteProps = {
  component: FC<any>
  path: string
}

const PrivateRoute: FC<GuardedRouteProps> = ({ component: Component }) => {
  const isAuth: boolean = useSelector(getIsAuth)
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
