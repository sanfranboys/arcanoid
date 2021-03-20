import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'

const RootRedirectRoute = () => {
  const history = useHistory()
  const code = new URLSearchParams(history.location.search).get('code')
  return (
    <>
      {code ? <Redirect to={`/auth?code=${code}`} /> : <Redirect to="/auth" />}
    </>
  )
}

export default RootRedirectRoute
