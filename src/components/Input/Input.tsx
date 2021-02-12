import React from 'react'
import { Input as InputAnt, InputProps, Form } from 'antd'
import classNames from '@/utils/'
import { OwnInputProps } from './types'
import './Input.scss'

const Input: React.FC<OwnInputProps & InputProps> = (props) => {
  const { className, error, register, label, id, defaultValue, ...prop } = props
  return (
    <div className={classNames(className, 'wrapper-input-component')}>
      <Form.Item label={label} className="label-input-component" htmlFor={id} />
      <InputAnt
        className={classNames('input-component', {
          'input-component-error': !!error,
        })}
        defaultValue={defaultValue}
        id={id}
        ref={register}
        {...prop}
      />
      {error && <div className="validation-input-error">{error.message}</div>}
    </div>
  )
}

export default Input
