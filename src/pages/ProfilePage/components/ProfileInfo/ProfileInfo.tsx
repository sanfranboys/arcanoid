import React, { FC } from 'react'
import { Space, Avatar, Centered, Button } from '@/elements/'
import { Description } from '@/components/'
import { AuthServices } from '@/services/'
import { BASE_URL } from '@/constants'
import { ProfileTypes } from '../../types'

const ProfileInfo: FC<ProfileTypes> = ({
  display_name,
  email,
  first_name,
  login,
  phone,
  second_name,
  avatar,
}) => (
  <Space size="large" direction="vertical" full>
    <Centered>
      <Avatar
        size={150}
        src={avatar ? BASE_URL + avatar : '/assets/images/avatar.png'}
      />
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

export default ProfileInfo
