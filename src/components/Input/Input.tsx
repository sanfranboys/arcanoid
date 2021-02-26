import React from 'react'
import { Input as InputComponent, InputProps, Form } from 'antd'
import { classNames } from 'utils'
import { OwnProps } from './types'
import './Input.scss'

const Input: React.FC<OwnProps & InputProps> = ({
  className,
  error,
  register,
  label,
  id,
  defaultValue,
  ...restProps
}) => (
  <div className={classNames(className, 'wrapper-input-component')}>
    <Form.Item label={label} className="label-input-component" htmlFor={id} />
    <InputComponent
      className={classNames('input-component', {
        'input-component-error': Boolean(error),
      })}
      defaultValue={defaultValue}
      id={id}
      ref={register}
      {...restProps}
    />
    {error && <div className="validation-input-error">{error.message}</div>}
  </div>
)

export default Input
