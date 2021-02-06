import React, { FC } from 'react'

import './BtnString.scss'

const BtnString: FC = (props) => {
  const { children } = props

  return <span className="btn-string">{children}</span>
}

export default BtnString
