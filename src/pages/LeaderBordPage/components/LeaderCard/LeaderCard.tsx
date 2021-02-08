import React, { FC } from 'react'
import { Col, Panel, Score } from '@/elements/'
import { Leader } from '../../types'

import './LeaderCard.scss'

const LeaderCard: FC<Leader> = (props) => {
  const { position, name, score } = props
  const title = `${position}. ${name}`

  return (
    <Col span={8}>
      <Panel head={title} center>
        <Score small={position > 3}>{score}</Score>
      </Panel>
    </Col>
  )
}

export default LeaderCard
