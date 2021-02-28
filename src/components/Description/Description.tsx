import React, { FC } from 'react'
import { classNames } from 'utils'
import { DescriptionProps } from './types'

import './Description.scss'

const Description: FC<DescriptionProps> = ({ title, children, noBorder }) => (
  <div
    className={classNames('description', {
      description_border_no: noBorder,
    })}
  >
    <div className="description__key">{title}</div>
    <div className="description__value">{children}</div>
  </div>
)

export default Description
