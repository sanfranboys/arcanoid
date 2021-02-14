import React, { FC } from 'react'
import classNames from '@/utils/'
import { DescriptionProps } from './types'

import './Description.scss'

const Description: FC<DescriptionProps> = (props) => {
  const { title, children, noBorder } = props
  const className = classNames('description', {
    description_border_no: noBorder,
  })

  return (
    <div className={className}>
      <div className="description__key">{title}</div>
      <div className="description__value">{children}</div>
    </div>
  )
}

export default Description
