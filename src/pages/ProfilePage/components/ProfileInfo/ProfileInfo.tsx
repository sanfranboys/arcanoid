import React, { FC } from 'react'
import { Space, Avatar, Centered, Button } from 'elements/'
import { useDispatch } from 'react-redux'
import { authLogoutAction } from 'ducks/'
import { Description } from 'components/'
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
}) => {
  const dispatch = useDispatch()
  const handleLogOut = () => dispatch(authLogoutAction())
  return (
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
      <Button onClick={handleLogOut}>Выйти</Button>
    </Space>
  )
}

export default ProfileInfo
