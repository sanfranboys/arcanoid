import React, { FC } from 'react'
import { Avatar as AntdAvatar, AvatarProps } from 'antd'
import { BASE_URL } from '@/constants'
import 'antd/lib/avatar/style/css'

const Avatar: FC<AvatarProps> = ({ src, ...prop }) => (
  <AntdAvatar
    src={src ? BASE_URL + src : '/assets/images/avatar.png'}
    {...prop}
  />
)

export default Avatar
