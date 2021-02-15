import React, { FC } from 'react'
import { Avatar as AvatarComponent, AvatarProps } from 'antd'
import 'antd/lib/avatar/style/css'

const Avatar: FC<AvatarProps> = (props) => <AvatarComponent {...props} />

export default Avatar
