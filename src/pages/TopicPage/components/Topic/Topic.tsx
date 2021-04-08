import React, { FC } from 'react'
import { Row, Col, Panel } from 'elements'
import { TopicProps } from './types'

const Topic: FC<TopicProps> = ({
  topic: { title, messagesCount },
  onClick,
}) => (
  <Row gutter={[16, 16]}>
    <Col span={22} onClick={onClick}>
      <Panel hoverable>{title}</Panel>
    </Col>

    <Col span={2}>
      <Panel center>{messagesCount}</Panel>
    </Col>
  </Row>
)

export default Topic
