import React, { FC } from 'react'
import { Form } from 'antd'
import { useForm } from 'react-hook-form'
import { AuthFormData } from '../../types'
import { LinkElement } from '../../../../components/LinkElement'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import './Auth.scss'

const Auth: FC = () => {
  const { handleSubmit, errors, register, setValue } = useForm<AuthFormData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  const onSubmit = (data: FormData) => console.log(data)

  return (
    <div className="auth">
      <div className="auth__wrapper">
        <Form className="auth__container" onFinish={handleSubmit(onSubmit)}>
          <Input
            label="Имя"
            name="login"
            id="login"
            className="auth__container__input"
            onChange={(e) => setValue('login', e.target.value)}
            register={register(
              { name: 'login' },
              { required: true, minLength: 3 }
            )}
            error={!!errors.login}
          />
          <Input
            label="Пароль"
            name="password"
            id="password"
            className="auth__container__input"
            onChange={(e) => setValue('password', e.target.value)}
            register={register(
              { name: 'password' },
              { required: true, minLength: 6 }
            )}
            error={!!errors.password}
          />
          <div className="auth__wrapper-button">
            <Button type="submit" className="auth__button">
              Авторизоваться
            </Button>
          </div>
        </Form>
        <LinkElement link="/reg">Нет аккаунта?</LinkElement>
      </div>
    </div>
  )
}

export default Auth
