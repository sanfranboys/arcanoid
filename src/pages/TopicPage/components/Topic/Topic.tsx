import React, { FC } from 'react'
import { Row, Col, Panel } from '@/elements/'
import { TopicProps } from './types'

const Topic: FC<TopicProps> = (props) => {
  const {
    topic: { name, answersCount },
    onClick,
  } = props

  return (
    <Row gutter={[16, 16]}>
      <Col span={22} onClick={onClick}>
        <Panel hoverable>{name}</Panel>
      </Col>

      <Col span={2}>
        <Panel center>{answersCount}</Panel>
      </Col>
    </Row>
  )
}

export default Topic
