import React from 'react';
import Forums from './components/Forums';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Page from '../Page';

const ForumPage = () => (
  <Page title='Форум'>
    <Row>
      <Col span={18} offset={4}>
        <Forums />
      </Col>
    </Row>
  </Page>
)

export default ForumPage;
