import React, { ChangeEvent, FC, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'antd'
import { Row, Col, Button, Avatar, Centered, Space, Upload } from '@/elements/'
import { Input } from '@/components/'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  ProfileFormDataKey,
  ChangeProfileTypes,
  ProfileTypes,
} from '../../types'

const phoneRegExp = /[0-9]+$/

const ProfileEditFormSchema = yup.object().shape({
  login: yup.string().required('Обязательное поле').min(3, 'Мининум 3 символа'),
  email: yup
    .string()
    .required('Обязательное поле')
    .email('Поле должно быть в формате email'),
  first_name: yup
    .string()
    .required('Обязательное поле')
    .min(3, 'Мининум 3 символа'),
  second_name: yup
    .string()
    .required('Обязательное поле')
    .min(3, 'Мининум 3 символа'),
  display_name: yup
    .string()
    .required('Обязательное поле')
    .min(3, 'Мининум 3 символа'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Неверный формат номера')
    .required('Обязательное поле')
    .min(11, 'Мининум 11 символа')
    .max(11, 'Максимум 11 символа'),
})

const ProfileEditForm: FC<ChangeProfileTypes> = ({
  onSubmit,
  changeAvatar,
  ...props
}) => {
  const { handleSubmit, errors, register, setValue } = useForm<ProfileTypes>({
    resolver: yupResolver(ProfileEditFormSchema),
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
    (fieldName: ProfileFormDataKey) => register({ name: fieldName }),
    [register]
  )

  const {
    first_name,
    second_name,
    email,
    display_name,
    phone,
    login,
    avatar,
  } = props

  return (
    <Space size="large" direction="vertical" full>
      <Centered>
        <Upload action={changeAvatar} showUploadList={false}>
          <Avatar size={150} src={avatar} />
        </Upload>
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
              error={errors.first_name}
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
              error={errors.second_name}
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
              error={errors.login}
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
              error={errors.email}
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
              error={errors.display_name}
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
              error={errors.phone}
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
