import React, { ChangeEvent, FC, useCallback } from 'react'
import { Form } from 'antd'
import { useForm } from 'react-hook-form'
import {
  ContentBox,
  Button,
  LinkElement,
  Row,
  Col,
  Centered,
} from '@/elements/'
import { Input } from '@/components/'
import { AuthServices } from '@/services/'
import { yupResolver } from '@hookform/resolvers/yup'
import authSchema from '../../schema'
import { AuthFormData, AuthFormDataKey } from '../../types'

const Auth: FC = () => {
  const { handleSubmit, errors, register, setValue } = useForm<AuthFormData>({
    resolver: yupResolver(authSchema),
  })

  const onSubmit = (data: AuthFormData) => AuthServices.signIn(data)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget
      setValue(name as AuthFormDataKey, value)
    },
    [setValue]
  )

  const getRegister = useCallback(
    (fieldName: AuthFormDataKey) => register({ name: fieldName }),
    [register]
  )

  return (
    <ContentBox>
      <Row gutter={[0, 10]}>
        <Col span={24}>
          <Form onFinish={handleSubmit(onSubmit)}>
            <Row gutter={[0, 20]}>
              <Col span={24}>
                <Input
                  label="Имя"
                  name="login"
                  id="login"
                  onChange={handleChange}
                  register={getRegister('login')}
                  error={errors.login}
                />
              </Col>
              <Col span={24}>
                <Input
                  label="Пароль"
                  name="password"
                  id="password"
                  type="password"
                  onChange={handleChange}
                  register={getRegister('password')}
                  error={errors.password}
                />
              </Col>
              <Col span={24}>
                <Button type="submit" className="auth__button">
                  Авторизация
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col span={24}>
          <Centered>
            <LinkElement link="/registration">Нет аккаунта?</LinkElement>
          </Centered>
        </Col>
      </Row>
    </ContentBox>
  )
}

export default Auth
