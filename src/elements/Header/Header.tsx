import React, { FC } from 'react'
import { Header as HeaderComponent } from 'antd/lib/layout/layout'

import './Header.scss'

const Header: FC = (props) => <HeaderComponent className="header" {...props} />

export default Header
