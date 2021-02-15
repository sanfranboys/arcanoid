import React, { FC } from 'react'
import { StringButtonProps } from './types'

import './StringButton.scss'

const StringButton: FC<StringButtonProps> = ({
  children,
  onClick = () => {},
}) => (
  <span className="string-button" onClick={onClick} onKeyDown={onClick}>
    {children}
  </span>
)

export default StringButton
