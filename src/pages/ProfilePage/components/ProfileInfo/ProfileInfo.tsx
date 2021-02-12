import React, { FC } from 'react'
import { Space, Avatar, Centered, Button } from '@/elements/'
import { Description } from '@/components/'
import { AuthServices } from '@/services/'
import { ProfileTypes } from '../../types'

const ProfileInfo: FC<ProfileTypes> = (props) => {
  const {
    display_name,
    email,
    first_name,
    login,
    phone,
    second_name,
    avatar,
  } = props

  return (
    <Space size="large" direction="vertical" full>
      <Centered>
        <Avatar size={150} src={avatar} />
      </Centered>
      <Description title="Имя:">{first_name}</Description>
      <Description title="Фамилия:">{second_name}</Description>
      <Description title="Никнейм:">{display_name}</Description>
      <Description title="Email:">{email}</Description>
      <Description title="Телефон:">{phone}</Description>
      <Description title="Логин:">{login}</Description>
      <Button onClick={() => AuthServices.logOut()}>Выйти</Button>
    </Space>
  )
}

export default ProfileInfo
