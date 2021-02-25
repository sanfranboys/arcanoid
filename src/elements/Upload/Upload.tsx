import React, { FC } from 'react'
import { Upload as UploadComponent, UploadProps } from 'antd'
import 'antd/lib/upload/style/css'

const Upload: FC<UploadProps> = ({ children, ...restProps }) => (
  <UploadComponent {...restProps}>{children}</UploadComponent>
)
export default Upload
