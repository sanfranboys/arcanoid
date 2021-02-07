import React, { FC } from 'react'
import { Image as AntdImage, ImageProps } from 'antd'

import 'antd/lib/image/style/css'

const Image: FC<ImageProps> = (props) => <AntdImage {...props} />

export default Image
