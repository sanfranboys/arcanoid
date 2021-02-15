import React, { FC } from 'react'
import { StringButtonProps } from './types'

import './StringButton.scss'

const StringButton: FC<StringButtonProps> = ({
  children,
  onClick = () => {},
}) => (
  <button
    className="string-button"
    onClick={onClick}
    onKeyDown={onClick}
    type="button"
  >
    {children}
  </button>
)

export default StringButton
