import React, { FC } from 'react'
import { Form } from 'antd'
import { useForm } from 'react-hook-form'
import { ContentBox, Button, LinkElement, Row, Col } from '@/elements/'
import { Input } from '@/components/'
import { AuthFormData } from '../../types'
import { AuthServices } from '../../../../components/Services'

const Auth: FC = () => {
  const { handleSubmit, errors, register, setValue } = useForm<AuthFormData>()
  const onSubmit = (data: AuthFormData) => AuthServices.signIn(data)

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
                  onChange={({ target }: InputEvent) =>
                    setValue('login', (target as HTMLInputElement)?.value)
                  }
                  register={register(
                    { name: 'login' },
                    { required: true, minLength: 3 }
                  )}
                  error={!!errors.login}
                />
              </Col>
              <Col span={24}>
                <Input
                  label="Пароль"
                  name="password"
                  id="password"
                  onChange={({ target }: InputEvent) =>
                    setValue('password', (target as HTMLInputElement)?.value)
                  }
                  register={register(
                    { name: 'password' },
                    { required: true, minLength: 6 }
                  )}
                  error={!!errors.password}
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
          <LinkElement link="/registration">Нет аккаунта?</LinkElement>
        </Col>
      </Row>
    </ContentBox>
  )
}

export default Auth
