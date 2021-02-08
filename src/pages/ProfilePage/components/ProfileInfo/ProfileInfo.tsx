import React, { useEffect, useState } from 'react'
import { Space, Avatar, Centered, Button } from '@/elements/'
import { Description } from '@/components/'
import { AuthServices } from '../../../../components/Services'
import { ProfileTypes } from '../../types'

const ProfileInfo = () => {
  const [userData, setUserData] = useState<ProfileTypes>({
    display_name: '',
    email: '',
    first_name: '',
    login: '',
    phone: '',
    second_name: '',
  })
  useEffect(() => {
    AuthServices.getUserInfo().then((res) => setUserData(res))
  }, [])
  const {
    display_name,
    email,
    first_name,
    login,
    phone,
    second_name,
  } = userData
  return (
    <Space size="large" direction="vertical" full>
      <Centered>
        <Avatar size={150} src="/assets/images/avatar.png" />
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
