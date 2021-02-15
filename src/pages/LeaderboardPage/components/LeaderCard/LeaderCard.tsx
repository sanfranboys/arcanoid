import React, { FC } from 'react'
import { Col, Panel, Score } from '@/elements/'
import { Leader } from '../../types'

import './LeaderCard.scss'

const LeaderCard: FC<Leader> = ({ position, name, score }) => (
  <Col span={8}>
    <Panel head={`${position}. ${name}`} center>
      <Score small={position > 3}>{score}</Score>
    </Panel>
  </Col>
)

export default LeaderCard
