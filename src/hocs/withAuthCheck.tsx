import { userRequestAction } from 'ducks'
import React, { ComponentType, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const withAuthCheck = (WrappedComponent: ComponentType) => {
  const WithAuthCheck = (props: any) => {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(userRequestAction())
    }, [dispatch])

    return <WrappedComponent {...props} />
  }

  return WithAuthCheck
}

export default withAuthCheck
