import React, { FC } from 'react'
import { Form, Button, Layout } from 'antd'
import { useForm } from 'react-hook-form'
import { FormData } from './types'
import classNames from '../../utils'
import './AuthPage.scss'

const AuthPage: FC = () => {
  const { Content } = Layout
  const { register, handleSubmit, errors } = useForm<FormData>()

  const onSubmit = (data: FormData) => console.log(data)

  return (
    <Content className="auth">
      <div className="auth__wrapper">
        <h2 className="auth__title">Авторизация</h2>
        <Form className="auth__container" onFinish={handleSubmit(onSubmit)}>
          <Form.Item label="Имя" className="auth__container__input">
            <input
              className={classNames('auth__input', {
                auth__input_error: !!errors.login,
              })}
              name="login"
              ref={register({
                required: true,
                minLength: 3,
              })}
            />
            {errors.login && (
              <div className="auth__error">Обязательное поле</div>
            )}
          </Form.Item>
          <Form.Item label="Пароль" className="auth__container__input">
            <input
              className={classNames('auth__input', {
                auth__input_error: !!errors.password,
              })}
              name="password"
              ref={register({ required: true, minLength: 6 })}
            />
            {errors.password && (
              <div className="auth__error">Обязательное поле</div>
            )}
          </Form.Item>
          <div className="auth__wrapper-button">
            <Button htmlType="submit" className="auth__button">
              Авторизоваться
            </Button>
          </div>
        </Form>
        <a href="/" className="auth__link">
          Нет аккаунта?
        </a>
      </div>
    </Content>
  )
}

export default AuthPage
