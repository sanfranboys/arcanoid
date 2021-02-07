import React, { FC } from 'react'
import { Form } from 'antd'
import { WrapFormTypes } from './types'
import Button from '../Button'
import { LinkElement } from '../LinkElement'
import './WrapForm.scss'

const WrapForm: FC<WrapFormTypes> = ({
  children,
  onFinish,
  btnText,
  linkText,
  href,
}) => (
  <div className="form-component">
    <div className="form-component__wrapper">
      <Form className="form-component__container" onFinish={onFinish}>
        {children}
        <Button type="submit" className="form-component__button">
          {btnText}
        </Button>
      </Form>
      <LinkElement link={href}>{linkText}</LinkElement>
    </div>
  </div>
)

export default WrapForm
