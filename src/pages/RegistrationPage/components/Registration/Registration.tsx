import React, { ChangeEvent, FC, useCallback } from 'react'
import { Form } from 'antd'
import { useForm } from 'react-hook-form'
import { Button, ContentBox, LinkElement, Row, Col, Centered } from 'elements'
import { Input } from 'components'
import { AuthServices } from 'services'
import { yupResolver } from '@hookform/resolvers/yup.js'
import { RegistrationSchema } from '../../schema'
import { RegistrationFormData, RegistrationFormDataKey } from '../../types'

const Registration: FC = () => {
  const {
    handleSubmit,
    errors,
    register,
    setValue,
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(RegistrationSchema),
  })

  const onSubmit = (data: RegistrationFormData) => AuthServices.signUp(data)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget
      setValue(name as RegistrationFormDataKey, value)
    },
    [setValue]
  )

  const getRegister = useCallback(
    (fieldName: RegistrationFormDataKey) => register({ name: fieldName }),
    [register]
  )

  return (
    <ContentBox>
      <Row gutter={[0, 10]}>
        <Col span={24}>
          <Form onFinish={handleSubmit(onSubmit)}>
            <Row gutter={[0, 24]}>
              <Col span={24}>
                <Input
                  label="Имя"
                  name="first_name"
                  id="first_name"
                  onChange={handleChange}
                  register={getRegister('first_name')}
                  error={errors.first_name}
                />
              </Col>
              <Col span={24}>
                <Input
                  label="Фамилия"
                  name="second_name"
                  id="second_name"
                  onChange={handleChange}
                  register={getRegister('second_name')}
                  error={errors.second_name}
                />
              </Col>
              <Col span={24}>
                <Input
                  label="Логин"
                  name="login"
                  id="login"
                  onChange={handleChange}
                  register={getRegister('login')}
                  error={errors.login}
                />
              </Col>
              <Col span={24}>
                <Input
                  label="Почта"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  register={getRegister('email')}
                  error={errors.email}
                />
              </Col>
              <Col span={24}>
                <Input
                  label="Пароль"
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  register={getRegister('password')}
                  error={errors.password}
                />
              </Col>
              <Col span={24}>
                <Input
                  label="Телефон"
                  name="phone"
                  id="phone"
                  onChange={handleChange}
                  register={getRegister('phone')}
                  error={errors.phone}
                />
              </Col>
              <Col span={24}>
                <Button type="submit" className="registration__button">
                  Авторизация
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col span={24}>
          <Centered>
            <LinkElement link="/auth">Войти</LinkElement>
          </Centered>
        </Col>
      </Row>
    </ContentBox>
  )
}

export default Registration
