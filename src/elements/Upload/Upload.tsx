import React, { FC } from 'react'
import { Upload as UploadAnt } from 'antd'
import 'antd/lib/upload/style/css'

const Upload: FC = ({ children, ...props }) => (
  <UploadAnt {...props}>{children}</UploadAnt>
)
export default Upload
