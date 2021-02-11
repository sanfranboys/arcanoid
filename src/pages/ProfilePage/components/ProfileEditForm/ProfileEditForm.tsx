import React, { ChangeEvent, FC, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form } from 'antd'
import {
  Row,
  Col,
  Button,
  Avatar,
  Centered,
  Space,
  Modal,
  Upload,
  NotificationWindow,
} from '@/elements/'
import { UserServices } from '@/services/'
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
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [avatarData, setAvatarData] = useState<null | {}>(null)

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

  const changeAvatar = () => {
    if (avatarData) {
      setModalOpen(false)
      return UserServices.changeUserAvatar(avatarData)
    }
    return NotificationWindow({ description: 'Загрузити фотографию' })
  }

  const onChange = ({ file }: any) => {
    if (file.status !== 'uploading') {
      const data = new FormData()
      data.append('avatar', file.originFileObj)
      setAvatarData(data)
    }
  }

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
      <Modal
        title="Аатар"
        onOk={changeAvatar}
        onCancel={() => setModalOpen(false)}
        visible={modalOpen}
      >
        <Upload onChange={onChange} onlistType="picture">
          <Button>Загрузить</Button>
        </Upload>
      </Modal>
      <Centered>
        <Avatar size={150} src={avatar} onClick={() => setModalOpen(true)} />
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
