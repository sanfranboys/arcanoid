import React, { FC } from 'react'
import { Space as SpaceComponent } from 'antd'
import { classNames } from 'utils/'
import { SpaceProps } from './types'

import 'antd/lib/space/style/css'

import './Space.scss'

const Space: FC<SpaceProps> = ({
  full,
  between,
  className: initialClassName,
  ...restProps
}) => {
  const className = classNames('space', initialClassName, {
    'space_full-width': full,
    space_between: between,
  })

  return <SpaceComponent {...restProps} className={className} />
}

export default Space
