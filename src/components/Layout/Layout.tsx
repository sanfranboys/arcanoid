import React, { FC } from 'react'
import { Layout as AntdLayout, LayoutProps } from 'antd'

import 'antd/lib/layout/style/css'
import './Layout.scss'

const Layout: FC<LayoutProps> = (props) => (
  <AntdLayout className="layout" {...props} />
)

export default Layout
