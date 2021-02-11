import React, { FC } from 'react'
import { Avatar as AntdAvatar, AvatarProps } from 'antd'
import 'antd/lib/avatar/style/css'

const Avatar: FC<AvatarProps> = ({ src, ...prop }) => (
  <AntdAvatar
    src={src ? `https://ya-praktikum.tech${src}` : '/assets/images/avatar.png'}
    {...prop}
  />
)

export default Avatar
