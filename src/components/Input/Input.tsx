import React from 'react'
import { Input as InputAnt, InputProps } from 'antd'
import classNames from '../../utils'
import { OwnInputProps } from './types'
import './Input.scss'

const Input: React.FC<OwnInputProps & InputProps> = (props) => {
  const { className, error, register, ...prop } = props
  return (
    <InputAnt
      className={classNames(className, 'input-component', {
        'input-component-error': error,
      })}
      ref={register}
      {...prop}
    />
  )
}

export default Input
