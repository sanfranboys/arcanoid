import React, { FC } from 'react'
import { Form } from 'antd'
import { useForm } from 'react-hook-form'
import Button from '../../../../elements/Button'
import ContentBox from '../../../../elements/ContentBox'
import Input from '../../../../components/Input'
import LinkElement from '../../../../elements/LinkElement'
import { RegistrationFormData } from '../../types'
import Row from '../../../../elements/Row'
import Col from '../../../../elements/Col'

const Registration: FC = () => {
  const {
    handleSubmit,
    errors,
    register,
    setValue,
  } = useForm<RegistrationFormData>()

  const onSubmit = (data: FormData) => console.log(data)
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
                  className="registration__container-input"
                  onChange={(e) => setValue('first_name', e.target.value)}
                  register={register(
                    { name: 'first_name' },
                    { required: true, minLength: 3 }
                  )}
                  error={!!errors.first_name}
                />
              </Col>
              <Col span={24}>
                <Input
                  label="Фамилия"
                  name="second_name"
                  id="second_name"
                  className="registration__container-input"
                  onChange={(e) => setValue('second_name', e.target.value)}
                  register={register(
                    { name: 'second_name' },
                    { required: true, minLength: 3 }
                  )}
                  error={!!errors.second_name}
                />
              </Col>
              <Col span={24}>
                <Input
                  label="Логин"
                  name="login"
                  id="login"
                  className="registration__container-input"
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
                  label="Почта"
                  name="email"
                  id="email"
                  className="registration__container-input"
                  onChange={(e) => setValue('email', e.target.value)}
                  register={register(
                    { name: 'email' },
                    { required: true, minLength: 3 }
                  )}
                  error={!!errors.email}
                />
              </Col>
              <Col span={24}>
                <Input
                  label="Пароль"
                  name="password"
                  id="password"
                  className="registration__container-input"
                  onChange={(e) => setValue('password', e.target.value)}
                  register={register(
                    { name: 'password' },
                    { required: true, minLength: 3 }
                  )}
                  error={!!errors.password}
                />
              </Col>
              <Col span={24}>
                <Input
                  label="Телефон"
                  name="phone"
                  id="phone"
                  className="registration__container-input"
                  onChange={(e) => setValue('phone', e.target.value)}
                  register={register(
                    { name: 'phone' },
                    { required: true, minLength: 3 }
                  )}
                  error={!!errors.phone}
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
          <LinkElement link="/auth">Войти</LinkElement>
        </Col>
      </Row>
    </ContentBox>
  )
}

export default Registration
