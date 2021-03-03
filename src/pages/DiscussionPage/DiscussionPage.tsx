import React from 'react'
import { Page } from 'pages'
import { Col, Return, Row } from 'elements'
import { Discussion } from './components/Discussion'

const DiscussionPage = () => (
  <Page title="Обсуждение">
    <Return />
    <Row>
      <Col span={18} offset={4}>
        <Discussion />
      </Col>
    </Row>
  </Page>
)

export default DiscussionPage
