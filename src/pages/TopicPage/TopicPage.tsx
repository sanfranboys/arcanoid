import React from 'react'
import Topics from './components/Topics'
import Row from '../../elements/Row'
import Col from '../../elements/Col'
import Page from '../Page'

const TopicPage = () => (
  <Page title="Темы">
    <Row>
      <Col span={18} offset={4}>
        <Topics />
      </Col>
    </Row>
  </Page>
)

export default TopicPage
