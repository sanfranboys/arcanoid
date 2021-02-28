import React from 'react'
import { Row, Col } from 'elements'
import { Page } from 'pages'
import { Forums } from './components/Forums'

const ForumPage = () => (
  <Page title="Форум">
    <Row>
      <Col span={18} offset={4}>
        <Forums />
      </Col>
    </Row>
  </Page>
)

export default ForumPage
