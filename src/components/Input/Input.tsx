import React from 'react'
import { Input as InputAnt, InputProps, Form } from 'antd'
import classNames from '@/utils/'
import { OwnProps } from './types'
import './Input.scss'

const Input: React.FC<OwnProps & InputProps> = ({
  className,
  error,
  register,
  label,
  id,
  defaultValue,
  ...restProp
}) => (
  <div className={classNames(className, 'wrapper-input-component')}>
    <Form.Item label={label} className="label-input-component" htmlFor={id} />
    <InputAnt
      className={classNames('input-component', {
        'input-component-error': Boolean(error),
      })}
      defaultValue={defaultValue}
      id={id}
      ref={register}
      {...restProp}
    />
    {error && <div className="validation-input-error">{error.message}</div>}
  </div>
)

export default Input
