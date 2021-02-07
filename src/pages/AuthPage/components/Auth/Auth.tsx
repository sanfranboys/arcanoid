import React, { FC } from 'react'
import { Form } from 'antd'
import { useForm } from 'react-hook-form'
import { AuthFormData } from '../../types'
import { ContentBox } from '../../../../components/ContetntBox'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import { LinkElement } from '../../../../components/LinkElement'
import Row from '../../../../components/Row'
import Col from '../../../../components/Col'

const Auth: FC = () => {
  const { handleSubmit, errors, register, setValue } = useForm<AuthFormData>()
  const onSubmit = (data: FormData) => console.log(data)
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
                  onChange={(e) => setValue('login', e.target.value)}
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
                  onChange={(e) => setValue('password', e.target.value)}
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
          <LinkElement link="/reg">Нет аккаунта?</LinkElement>
        </Col>
      </Row>
    </ContentBox>
  )
}

export default Auth
