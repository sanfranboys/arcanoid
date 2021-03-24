import React, { FC } from 'react'
import { classNames } from 'utils'
import { PanelProps } from './types'

import './Panel.scss'

const Panel: FC<PanelProps> = ({
  children,
  head,
  center,
  hoverable,
  className,
}) => {
  const bodyClassName = classNames('panel__body', { panel_center: center })
  const panelClassName = classNames(
    'panel',
    {
      'panel_with-head': !!head,
      panel_hoverable: !!hoverable,
    },
    className
  )
  return (
    <div className={panelClassName}>
      {head && <div className="panel__head">{head}</div>}

      <div className={bodyClassName}>{children}</div>
    </div>
  )
}

export default Panel
