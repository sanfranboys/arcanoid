import React, { FC } from 'react'
import { Form } from 'antd'
import { useForm } from 'react-hook-form'
import { AuthFormData } from './types'
import Button from '../../components/Button'
import Input from '../../components/Input/Input'
import './AuthPage.scss'

const AuthPage: FC = () => {
  const { handleSubmit, errors, register, setValue } = useForm<AuthFormData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  const onSubmit = (data: FormData) => console.log(data)

  return (
    <div className="auth">
      <div className="auth__wrapper">
        <h2 className="auth__title">Авторизация</h2>
        <Form className="auth__container" onFinish={handleSubmit(onSubmit)}>
          <Form.Item
            label="Имя"
            className="auth__container__input"
            htmlFor="login"
          >
            <Input
              name="login"
              id="login"
              onChange={(e) => setValue('login', e.target.value)}
              register={register(
                { name: 'login' },
                { required: true, minLength: 3 }
              )}
              error={!!errors.login}
            />
            {errors.login && (
              <div className="auth__error">Обязательное поле</div>
            )}
          </Form.Item>
          <Form.Item
            label="Пароль"
            className="auth__container__input"
            htmlFor="password"
          >
            <Input
              name="password"
              id="password"
              onChange={(e) => setValue('password', e.target.value)}
              register={register(
                { name: 'password' },
                { required: true, minLength: 6 }
              )}
              error={!!errors.password}
            />
            {errors.password && (
              <div className="auth__error">Обязательное поле</div>
            )}
          </Form.Item>
          <div className="auth__wrapper-button">
            <Button type="submit" className="auth__button">
              Авторизоваться
            </Button>
          </div>
        </Form>
        <a href="/" className="auth__link">
          Нет аккаунта?
        </a>
      </div>
    </div>
  )
}

export default AuthPage
