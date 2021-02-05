import React from 'react';
import Row from '../../../../components/Row';
import Col from '../../../../components/Col';
import Space from '../../../../components/Space';

import './Forums.scss';

const Forums = () => (
  <Space direction='vertical' full>
    <Row gutter={[16, 16]} className='forum-row'>
      <Col span={19} className='forum-col'>
        <div className='forum-cell'>
          Новые игры
        </div>
      </Col>

      <Col span={3} className='forum-col'>
        <div className='forum-cell forum-cell_stroke forum-cell_with-control'>
          <span>222</span>
          <span className='forum-plus-btn'>+</span>
        </div>
      </Col>

      <Col span={2} className='forum-col'>
        <div className='forum-cell forum-cell_stroke centered-content'>
          345
        </div>
      </Col>
    </Row>

    <Row gutter={[16, 16]} className='forum-row'>
      <Col span={19} className='forum-col'>
        <div className='forum-cell'>
          Новые игры
        </div>
      </Col>

      <Col span={3} className='forum-col'>
        <div className='forum-cell forum-cell_stroke forum-cell_with-control'>
          <span>222</span>
          <span className='forum-plus-btn'>+</span>
        </div>
      </Col>

      <Col span={2} className='forum-col'>
        <div className='forum-cell forum-cell_stroke centered-content'>
          345
        </div>
      </Col>
    </Row>

    <Row gutter={[16, 16]} className='forum-row'>
      <Col span={19} className='forum-col'>
        <div className='forum-cell'>
          Новые игры
        </div>
      </Col>

      <Col span={3} className='forum-col'>
        <div className='forum-cell forum-cell_stroke forum-cell_with-control'>
          <span>222</span>
          <span className='forum-plus-btn'>+</span>
        </div>
      </Col>

      <Col span={2} className='forum-col'>
        <div className='forum-cell forum-cell_stroke centered-content'>
          345
        </div>
      </Col>
    </Row>
  </Space>
)

export default Forums;
