import { getStatus } from 'ducks'
import Spin from 'elements/Spin'
import React, { ComponentType } from 'react'
import { useSelector } from 'react-redux'

const withForumSpin = (WrappedComponent: ComponentType) => {
  const WithForumSpin = (props: any) => {
    const status = useSelector(getStatus)
    if (status === 'isLoading') return <Spin size="large" delay={300} />

    return <WrappedComponent {...props} />
  }

  return WithForumSpin
}

export default withForumSpin
