import React, { FC } from 'react'
import { PanelProps } from './types'
import classNames from '../../utils'

import './Panel.scss'

const Panel: FC<PanelProps> = (props) => {
  const { children, head, center } = props
  const bodyClassName = classNames('panel__body', { panel_center: center })
  const panelClassName = classNames('panel', { 'panel_with-head': !!head })

  return (
    <div className={panelClassName}>
      {head && <div className="panel__head">{head}</div>}

      <div className={bodyClassName}>{children}</div>
    </div>
  )
}

export default Panel
