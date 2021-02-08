import React, { FC } from 'react'
import { Space as AntdSpace } from 'antd'
import classNames from '@/utils/'
import { SpaceProps } from './types'

import 'antd/lib/space/style/css'

import './Space.scss'

const Space: FC<SpaceProps> = (props) => {
  const { full, between, className: initialClassName, ...rest } = props
  const className = classNames('space', initialClassName, {
    'space_full-width': full,
    space_between: between,
  })

  return <AntdSpace {...rest} className={className} />
}

export default Space
