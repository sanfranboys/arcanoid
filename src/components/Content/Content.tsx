import React, { FC } from 'react'
import { Content as AntdContent } from 'antd/lib/layout/layout'

const Content: FC<{ children: JSX.Element }> = (props) => (
  <AntdContent {...props} />
)

export default Content
