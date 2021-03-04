import React from 'react'
import { Row, Col } from 'elements'
import { Page, Return } from 'pages'
import { Topics } from './components/Topics'

const TopicPage = () => (
  <Page title="Темы">
    <Return />
    <Row>
      <Col span={18} offset={4}>
        <Topics />
      </Col>
    </Row>
  </Page>
)

export default TopicPage
