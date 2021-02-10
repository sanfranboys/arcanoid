import React, { ButtonHTMLAttributes, FC } from 'react'
import classNames from '@/utils/'
import './Button.scss'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
  className,
  type = 'button',
}) => (
  <button
    className={classNames(className, 'button-component')}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
