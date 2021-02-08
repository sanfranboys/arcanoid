import React, { FC } from 'react'
import { Space as AntdSpace } from 'antd'
import { SpaceProps } from './types'
import classNames from '../../utils'

import 'antd/lib/space/style/css'

import './Space.scss'

const Space: FC<SpaceProps> = (props) => {
  const { full, between, ...rest } = props
  const className = classNames('space', {
    'space_full-width': full,
    space_between: between,
  })

  return <AntdSpace {...rest} className={className} />
}

export default Space
