import React, { FC } from 'react'
import { Header as AntdHeader } from 'antd/lib/layout/layout'

import './Header.scss'

const Header: FC = (props) => <AntdHeader className="header" {...props} />

export default Header
