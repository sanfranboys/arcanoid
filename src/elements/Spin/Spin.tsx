import React, { FC } from 'react'
import { Spin as SpinComponent, SpinProps } from 'antd'

import 'antd/lib/spin/style/css'

import './Spin.scss'

const Spin: FC<SpinProps> = (props) => (
  <div className="spin">
    <SpinComponent {...props} />
  </div>
)

export default Spin
