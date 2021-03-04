import React from 'react'
import { Page, Return } from 'pages'
import { Col, Row } from 'elements'
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
