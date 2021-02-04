import { Form, Input, Button, Layout } from 'antd'
import React from 'react'
import './Auth.scss'

// eslint-disable-next-line import/prefer-default-export
export const Auth: React.FC = () => {
  const { Content } = Layout
  return (
    <Content className="auth">
      <div className="auth__wrapper">
        <h2 className="auth__title">Авторизация</h2>
        <Form className="auth__container">
          <Form.Item label="Имя" className="auth__container__input">
            <Input className="auth__input" />
          </Form.Item>
          <Form.Item label="Пароль" className="auth__container__input">
            <Input className="auth__input" />
          </Form.Item>
          <div className="auth__wrapper-button">
            <Button type="primary" className="auth__button">
              Авторизоваться
            </Button>
          </div>
        </Form>
      </div>
    </Content>
  )
}
