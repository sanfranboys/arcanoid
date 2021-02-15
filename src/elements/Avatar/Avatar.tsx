import React, { FC } from 'react'
import { Avatar as AntdAvatar, AvatarProps } from 'antd'
import 'antd/lib/avatar/style/css'

const Avatar: FC<AvatarProps> = (props) => <AntdAvatar {...props} />

export default Avatar
