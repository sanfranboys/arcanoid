import React, { FC } from 'react'
import { Col, Panel, Score } from 'elements'
import { Leader } from '../../types'

import './LeaderCard.scss'

const LeaderCard: FC<Leader> = ({ position, sanfranPlayer, sanfranScore }) => (
  <Col span={8}>
    <Panel
      className={`leader-card_place_${position}`}
      head={`${position}. ${sanfranPlayer}`}
      center
    >
      <Score small={position > 3}>{sanfranScore}</Score>
    </Panel>
  </Col>
)

export default LeaderCard
