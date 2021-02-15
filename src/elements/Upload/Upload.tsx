import React, { FC } from 'react'
import { Upload as UploadComponent } from 'antd'
import 'antd/lib/upload/style/css'

const Upload: FC = ({ children, ...restProps }) => (
  <UploadComponent {...restProps}>{children}</UploadComponent>
)
export default Upload
