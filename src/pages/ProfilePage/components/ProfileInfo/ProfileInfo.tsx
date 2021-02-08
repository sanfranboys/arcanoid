import React from 'react'
import Space from '../../../../elements/Space'
import Avatar from '../../../../elements/Avatar'
import Description from '../../../../components/Description'
import Centered from '../../../../elements/Centered'

const ProfileInfo = () => (
  <Space size="large" direction="vertical" full>
    <Centered>
      <Avatar size={150} src="/assets/images/avatar.png" />
    </Centered>

    <Description title="Имя:">Алексей</Description>
    <Description title="Фамилия:">Андриенко</Description>
    <Description title="Логин:">C@rabasBaraba$</Description>
    <Description title="Email:">andrienko_av@gmail.com</Description>
    <Description title="Пароль:">*******</Description>
    <Description title="Телефон:">+9 970 976 55 44</Description>
  </Space>
)

export default ProfileInfo
