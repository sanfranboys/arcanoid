import React from 'react'
import Row from '../../../../components/Row'
import Col from '../../../../components/Col'
import Space from '../../../../components/Space'
import Panel from '../../../../components/Panel'
import Description from '../../../../components/Description'

const Topics = () => (
  <Space direction="vertical" full>
    <Row gutter={[16, 16]}>
      <Col span={20}>
        <Description title="Темы" />
      </Col>

      <Col span={2}>
        <Description title="Ответы" />
      </Col>
    </Row>

    <Row gutter={[16, 16]}>
      <Col span={20}>
        <Panel hoverable>Новые игры</Panel>
      </Col>

      <Col span={2}>
        <Panel center>345</Panel>
      </Col>
    </Row>

    <Row gutter={[16, 16]}>
      <Col span={20}>
        <Panel hoverable>Технологии</Panel>
      </Col>

      <Col span={2}>
        <Panel center>666</Panel>
      </Col>
    </Row>

    <Row gutter={[16, 16]}>
      <Col span={20}>
        <Panel hoverable>Дизайн</Panel>
      </Col>

      <Col span={2}>
        <Panel center>56</Panel>
      </Col>
    </Row>
  </Space>
)

export default Topics
