import React, { FC } from 'react'
import { Image as ImageComponent, ImageProps } from 'antd'
import { imgErrorConsole } from 'utils'
import { fallbackImage } from './constants'

import 'antd/lib/image/style/css'

const Image: FC<ImageProps> = ({ preview, ...restProps }) => (
  <ImageComponent
    fallback={fallbackImage}
    onError={imgErrorConsole}
    preview={preview ?? false}
    {...restProps}
  />
)

export default Image
