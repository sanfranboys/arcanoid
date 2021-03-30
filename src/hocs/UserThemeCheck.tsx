import React, { ComponentType, useEffect } from 'react'
import { userRequestAction } from 'ducks'
import { useDispatch } from 'react-redux'

const UserThemeCheck = (WrappedComponent: ComponentType) => {
  const ThemeCheck = (props: any) => {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(userRequestAction())
    }, [dispatch])

    return <WrappedComponent {...props} />
  }

  return ThemeCheck
}

export default UserThemeCheck
