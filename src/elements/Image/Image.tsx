import React, { FC } from 'react'
import { Image as AntdImage, ImageProps } from 'antd'
import { imgErrorConsole } from '@/utils/'
import { fallbackImage } from '@/constants'

import 'antd/lib/image/style/css'

const Image: FC<ImageProps> = (props) => {
  const { preview } = props
  return (
    <AntdImage
      fallback={fallbackImage}
      onError={imgErrorConsole}
      preview={preview ?? false}
      {...props}
    />
  )
}

export default Image
