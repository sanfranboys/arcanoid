import React from 'react'
import Forums from './components/Forums'
import Topics from './components/Topics'
import Discussion from './components/Discussion'
import Row from '../../components/Row'
import Col from '../../components/Col'
import Space from '../../components/Space'
import Page from '../Page'

const ForumPage = () => (
  <Page title="Форум">
    <Space size={50} direction="vertical" full>
      <Row>
        <Col span={18} offset={4}>
          <Discussion />
        </Col>
      </Row>

      <Row>
        <Col span={18} offset={4}>
          <Forums />
        </Col>
      </Row>

      <Row>
        <Col span={18} offset={4}>
          <Topics />
        </Col>
      </Row>
    </Space>
  </Page>
)

export default ForumPage
