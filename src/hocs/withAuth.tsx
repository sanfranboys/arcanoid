import { userRequestAction } from '@/ducks'
import React, { ComponentType, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const withAuth = (WrappedComponent: ComponentType) => {
  const WithAuth = (props: any) => {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(userRequestAction())
    }, [])

    return <WrappedComponent {...props} />
  }

  return WithAuth
}

export default withAuth
