import React from 'react';
import Space from '../../../../components/Space';
import Avatar from '../../../../components/Avatar';
import Description from '../../../../components/Description';
import Centered from '../../../../components/Centered';

const ProfileInfo = () => (
  <Space size='large' direction='vertical' full>
    <Centered>
      <Avatar size={150} src='/assets/images/avatar.png' />
    </Centered>

    <Description title='Имя:'>Алексей</Description>
    <Description title='Фамилия:'>Андриенко</Description>
    <Description title='Никнейм:'>C@rabasBaraba$</Description>
    <Description title='Email:'>andrienko_av@gmail.com</Description>
    <Description title='Телефон:'>+9 970 976 55 44</Description>
    <Description title='Пароль:'>qWerTy_</Description>
  </Space>
)

export default ProfileInfo;
