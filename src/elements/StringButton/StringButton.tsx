import React, { FC } from 'react'
import { StringButtonProps } from './types'

import './StringButton.scss'

const StringButton: FC<StringButtonProps> = (props) => {
  const { children, onClick = () => {} } = props

  return (
    <span className="string-button" onClick={onClick} onKeyDown={onClick}>
      {children}
    </span>
  )
}

export default StringButton
