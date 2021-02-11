import React, { ChangeEvent, FC, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'antd'
import { Row, Col, Button, Avatar, Centered, Space } from '@/elements/'
import { Input } from '@/components/'
import {
  ProfileFormDataKey,
  ChangeProfileTypes,
  ProfileTypes,
} from '../../types'

const ProfileEditForm: FC<ChangeProfileTypes> = ({ onSubmit, ...props }) => {
  const { handleSubmit, errors, register, setValue } = useForm<ProfileTypes>({
    defaultValues: props,
  })

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
  const { first_name, second_name, email, display_name, phone, login } = props
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
              defaultValue={first_name}
              onChange={handleChange}
              register={getRegister('first_name')}
              error={errors.first_name?.type}
            />
          </Col>
          <Col span={24}>
            <Input
              label="Фамилия"
              name="second_name"
              id="second_name"
              defaultValue={second_name}
              onChange={handleChange}
              register={getRegister('second_name')}
              error={errors.second_name?.type}
            />
          </Col>
          <Col span={24}>
            <Input
              label="Логин"
              name="login"
              id="login"
              defaultValue={login}
              onChange={handleChange}
              register={getRegister('login')}
              error={errors.login?.type}
            />
          </Col>
          <Col span={24}>
            <Input
              label="Почта"
              name="email"
              id="email"
              defaultValue={email}
              onChange={handleChange}
              register={getRegister('email')}
              error={errors.email?.type}
            />
          </Col>
          <Col span={24}>
            <Input
              label="Никнейм"
              name="display_name"
              id="display_name"
              defaultValue={display_name}
              onChange={handleChange}
              register={getRegister('display_name')}
              error={errors.display_name?.type}
            />
          </Col>
          <Col span={24}>
            <Input
              label="Телефон"
              name="phone"
              id="phone"
              defaultValue={phone}
              onChange={handleChange}
              register={getRegister('phone')}
              error={errors.phone?.type}
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
