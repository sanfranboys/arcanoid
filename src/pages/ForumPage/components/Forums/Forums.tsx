import React from 'react'
import Row from '../../../../elements/Row'
import Col from '../../../../elements/Col'
import Space from '../../../../elements/Space'
import StringButton from '../../../../elements/StringButton'
import Panel from '../../../../elements/Panel'

const Forums = () => (
  <Space direction="vertical" full>
    <Row gutter={[16, 16]}>
      <Col span={20}>
        <Panel>Новые игры</Panel>
      </Col>

      <Col span={2}>
        <Panel>
          <Space between full>
            <span>456</span>
            <StringButton>+</StringButton>
          </Space>
        </Panel>
      </Col>

      <Col span={2}>
        <Panel center>345</Panel>
      </Col>
    </Row>

    <Row gutter={[16, 16]}>
      <Col span={20}>
        <Panel>Технологии</Panel>
      </Col>

      <Col span={2}>
        <Panel>
          <Space between full>
            <span>232</span>
            <StringButton>+</StringButton>
          </Space>
        </Panel>
      </Col>

      <Col span={2}>
        <Panel center>666</Panel>
      </Col>
    </Row>

    <Row gutter={[16, 16]}>
      <Col span={20}>
        <Panel>Дизайн</Panel>
      </Col>

      <Col span={2}>
        <Panel>
          <Space between full>
            <span>1</span>
            <StringButton>+</StringButton>
          </Space>
        </Panel>
      </Col>

      <Col span={2}>
        <Panel center>56</Panel>
      </Col>
    </Row>
  </Space>
)

export default Forums
