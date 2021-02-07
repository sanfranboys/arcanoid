import React, { FC } from 'react'
import Form from 'antd/lib/form/Form'
import { useForm } from 'react-hook-form'
import Input from '../../../../components/Input'
import { RegistrationFormData } from '../../types'
import Button from '../../../../components/Button'

import './Registration.scss'
import { LinkElement } from '../../../../components/LinkElement'

const Registration: FC = () => {
  const {
    handleSubmit,
    errors,
    register,
    setValue,
  } = useForm<RegistrationFormData>()

  const onSubmit = (data: FormData) => console.log(data)
  return (
    <div className="registration">
      <div className="registration__wrapper">
        <Form onFinish={handleSubmit(onSubmit)} className="registration-form">
          <Input
            label="Имя"
            name="first_name"
            id="first_name"
            className="registration__container__input"
            onChange={(e) => setValue('first_name', e.target.value)}
            register={register(
              { name: 'first_name' },
              { required: true, minLength: 3 }
            )}
            error={!!errors.first_name}
          />
          <Input
            label="Фамилия"
            name="second_name"
            id="second_name"
            className="registration__container__input"
            onChange={(e) => setValue('second_name', e.target.value)}
            register={register(
              { name: 'second_name' },
              { required: true, minLength: 3 }
            )}
            error={!!errors.second_name}
          />
          <Input
            label="Логин"
            name="login"
            id="login"
            className="registration__container__input"
            onChange={(e) => setValue('login', e.target.value)}
            register={register(
              { name: 'login' },
              { required: true, minLength: 3 }
            )}
            error={!!errors.login}
          />
          <Input
            label="Почта"
            name="email"
            id="email"
            className="registration__container__input"
            onChange={(e) => setValue('email', e.target.value)}
            register={register(
              { name: 'email' },
              { required: true, minLength: 3 }
            )}
            error={!!errors.email}
          />
          <Input
            label="Пароль"
            name="password"
            id="password"
            className="registration__container__input"
            onChange={(e) => setValue('password', e.target.value)}
            register={register(
              { name: 'password' },
              { required: true, minLength: 3 }
            )}
            error={!!errors.password}
          />
          <Input
            label="Телефон"
            name="phone"
            id="phone"
            className="registration__container__input"
            onChange={(e) => setValue('phone', e.target.value)}
            register={register(
              { name: 'phone' },
              { required: true, minLength: 3 }
            )}
            error={!!errors.phone}
          />
          <Button className="registration_button" type="submit">
            Регистрация
          </Button>
        </Form>
        <LinkElement link="/auth">Войти</LinkElement>
      </div>
    </div>
  )
}

export default Registration
