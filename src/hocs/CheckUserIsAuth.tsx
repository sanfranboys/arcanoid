import React, { FC, useEffect } from 'react'
import { userRequestAction } from '@/ducks'
import { useDispatch } from 'react-redux'

const CheckUserIsAuth: FC = ({ children }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userRequestAction())
  }, [])
  return <>{children}</>
}
export default CheckUserIsAuth
