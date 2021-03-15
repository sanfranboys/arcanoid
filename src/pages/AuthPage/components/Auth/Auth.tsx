import React, { ChangeEvent, FC, useCallback, useEffect } from 'react'
import { Form } from 'antd'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import {
  ContentBox,
  Button,
  LinkElement,
  Row,
  Col,
  Centered,
  Image,
  NotificationWindow,
} from 'elements'
import { Input } from 'components'
import { yupResolver } from '@hookform/resolvers/yup.js'
import { authLoginAction } from 'ducks'
import { OAuthService } from 'services'
import { useHistory } from 'react-router'
import authSchema from '../../schema'
import { AuthFormData, AuthFormDataKey } from '../../types'
import './Auth.scss'

const Auth: FC = () => {
  const { handleSubmit, errors, register, setValue } = useForm<AuthFormData>({
    resolver: yupResolver(authSchema),
  })
  const dispatch = useDispatch()
  const history = useHistory()
  const onSubmit = useCallback(
    (data: AuthFormData) => dispatch(authLoginAction(data)),
    [dispatch]
  )

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget
      setValue(name as AuthFormDataKey, value)
    },
    [setValue]
  )

  useEffect(() => {
    const code = new URLSearchParams(history.location.search).get('code')
    if (code) {
      OAuthService.signIn({ code })
    }
  }, [history])

  const handleOauth = useCallback(() => {
    // TODO тут будет дергаться экшн внутри которого будет эта логика, пока тут оставлю
    OAuthService.getServiceId().then(({ data }) => {
      if (data.service_id) {
        window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${data.service_id}`
      } else {
        NotificationWindow({
          status: 5,
          description: 'Не получилось получить ServiceId',
          type: 'error',
        })
      }
    })
  }, [])

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
          <div className="auth__oauth-container">
            <Centered>
              <p>Либо войти через:</p>
              <Button
                type="button"
                className="auth__button-oauth"
                onClick={handleOauth}
              >
                <Image src="/assets/images/yandex-logo.svg" />
              </Button>
            </Centered>
          </div>
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
