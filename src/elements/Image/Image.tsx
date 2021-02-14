import React, { FC } from 'react'
import { Image as AntdImage, ImageProps } from 'antd'
import { imgErrorConsole } from '@/utils/'
import { fallbackImage } from '@/constants'

import 'antd/lib/image/style/css'

const Image: FC<ImageProps> = ({ preview, ...prop }) => (
  <AntdImage
    fallback={fallbackImage}
    onError={imgErrorConsole}
    preview={preview ?? false}
    {...prop}
  />
)

export default Image
