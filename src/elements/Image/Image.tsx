import React, { FC } from 'react'
import { Image as ImageComponent, ImageProps } from 'antd'
import { fallbackImage } from '@/constants'
import { imgErrorConsole } from 'utils'

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
