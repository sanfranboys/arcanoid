import React, { ChangeEvent, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'antd'
import Row from '../../../../elements/Row'
import Col from '../../../../elements/Col'
import Input from '../../../../components/Input'
import Button from '../../../../elements/Button'
import { ProfileFormData, ProfileFormDataKey } from '../../types'
import Avatar from '../../../../elements/Avatar'
import Centered from '../../../../elements/Centered'
import Space from '../../../../elements/Space'

const ProfileEditForm = () => {
  const {
    handleSubmit,
    errors,
    register,
    setValue,
  } = useForm<ProfileFormData>()

  const onSubmit = (data: FormData) => console.log(data)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget
      setValue(name as ProfileFormDataKey, value)
    },
    [setValue]
  )

  const getRegister = useCallback(
    (fieldName: ProfileFormDataKey) =>
      register({ name: fieldName }, { required: true, minLength: 3 }),
    [register]
  )

  return (
    <Space size="large" direction="vertical" full>
      <Centered>
        <Avatar size={150} src="/assets/images/avatar.png" />
      </Centered>

      <Form onFinish={handleSubmit(onSubmit)}>
        <Row gutter={[0, 24]}>
          <Col span={24}>
            <Input
              label="Имя"
              name="first_name"
              id="first_name"
              onChange={handleChange}
              register={getRegister('first_name')}
              error={!!errors.first_name}
            />
          </Col>

          <Col span={24}>
            <Input
              label="Фамилия"
              name="second_name"
              id="second_name"
              onChange={handleChange}
              register={getRegister('second_name')}
              error={!!errors.second_name}
            />
          </Col>

          <Col span={24}>
            <Input
              label="Логин"
              name="login"
              id="login"
              onChange={handleChange}
              register={getRegister('login')}
              error={!!errors.login}
            />
          </Col>

          <Col span={24}>
            <Input
              label="Почта"
              name="email"
              id="email"
              onChange={handleChange}
              register={getRegister('email')}
              error={!!errors.email}
            />
          </Col>

          <Col span={24}>
            <Input
              label="Пароль"
              name="password"
              id="password"
              onChange={handleChange}
              register={getRegister('password')}
              error={!!errors.password}
            />
          </Col>

          <Col span={24}>
            <Input
              label="Новый пароль"
              name="new_password"
              id="new_password"
              onChange={handleChange}
              register={getRegister('new_password')}
              error={!!errors.password}
            />
          </Col>

          <Col span={24}>
            <Input
              label="Телефон"
              name="phone"
              id="phone"
              onChange={handleChange}
              register={getRegister('phone')}
              error={!!errors.phone}
            />
          </Col>

          <Col span={24}>
            <Button type="submit">Сохранить</Button>
          </Col>
        </Row>
      </Form>
    </Space>
  )
}

export default ProfileEditForm
