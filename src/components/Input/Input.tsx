import React from 'react'
import { Input as InputAnt, InputProps, Form } from 'antd'
import classNames from '@/utils/'
import { OwnInputProps } from './types'
import './Input.scss'

const MessageErrorText = {
  required: 'Обязательное поле',
  minLength: 'Нужно больше символов',
}

const Input: React.FC<OwnInputProps & InputProps> = (props) => {
  const { className, error, register, label, id, value, ...prop } = props
  const message = error ? MessageErrorText[error] : null
  return (
    <div className={classNames(className, 'wrapper-input-component')}>
      <Form.Item
        label={label}
        className="label-input-component"
        htmlFor={id}
        initialValue={value}
      />
      <InputAnt
        className={classNames('input-component', {
          'input-component-error': !!error,
        })}
        id={id}
        ref={register}
        {...prop}
      />
      {error && <div className="validation-input-error">{message}</div>}
    </div>
  )
}

export default Input
