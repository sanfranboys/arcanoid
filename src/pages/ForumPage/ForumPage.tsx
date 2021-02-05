import React from 'react';
import Forums from './components/Forums';
import Row from '../../components/Row';
import Col from '../../components/Col';

import './ForumPage.scss';

const ForumPage = () => (
  <section className='forum-page'>
    <h1 className='forum-page__title'>Forums</h1>

    <Row>
      <Col span={18} offset={4}>
        <Forums />
      </Col>
    </Row>
  </section>
)

export default ForumPage;
