import React, { ButtonHTMLAttributes, FC } from 'react'
import classNames from '@/utils/'
import './Button.scss'

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
  className,
  type = 'button',
  disabled,
}) => (
  <button
    className={classNames(className, 'button-component', {
      'button-component__disabled': disabled,
    })}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

export default Button
