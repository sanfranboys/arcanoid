import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { AuthFormData } from '../../types'
import { WrapForm } from '../../../../components/WrapForm'
import Input from '../../../../components/Input'
import './Auth.scss'

const Auth: FC = () => {
  const { handleSubmit, errors, register, setValue } = useForm<AuthFormData>()
  const onSubmit = (data: FormData) => console.log(data)
  return (
    <WrapForm
      href="/reg"
      btnText="Авторизоваться"
      linkText="Нет аккаунта?"
      onFinish={handleSubmit(onSubmit)}
    >
      <Input
        label="Имя"
        name="login"
        id="login"
        className="auth__container__input"
        onChange={(e) => setValue('login', e.target.value)}
        register={register({ name: 'login' }, { required: true, minLength: 3 })}
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
    </WrapForm>
  )
}

export default Auth
