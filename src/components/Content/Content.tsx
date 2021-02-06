import React, { FC } from 'react'
import { Content as AntdContent } from 'antd/lib/layout/layout'

const Content: FC<unknown> = (props) => (
  <AntdContent className="content" {...props} />
)

export default Content
