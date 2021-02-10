import React, { FC } from 'react'
import classNames from '@/utils/'
import { ScoreProps } from './types'

import './Score.scss'

const Score: FC<ScoreProps> = (props) => {
  const { children, small } = props
  const className = classNames('score', { score_small: small })

  return <span className={className}>{children}</span>
}

export default Score
