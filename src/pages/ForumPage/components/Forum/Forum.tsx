import React, { FC } from 'react'
import { Row, Col, Panel } from 'elements'
import { ForumProps } from './types'

const Forum: FC<ForumProps> = ({ forum: { title, topicsCount }, onClick }) => (
  <Row gutter={[16, 16]}>
    <Col span={20} onClick={onClick}>
      <Panel hoverable>{title}</Panel>
    </Col>

    <Col span={2}>
      <Panel center>{topicsCount}</Panel>
    </Col>
  </Row>
)

export default Forum
