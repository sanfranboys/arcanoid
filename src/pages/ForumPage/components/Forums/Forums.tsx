import React from 'react';
import Row from '../../../../components/Row';
import Col from '../../../../components/Col';
import Space from '../../../../components/Space';
import BtnString from '../../../../components/BtnString';
import Panel from '../../../../components/Panel';

const Forums = () => (
  <Space direction='vertical' full>
    <Row gutter={[16, 16]}>
      <Col span={20}>
        <Panel>Новые игры</Panel>
      </Col>

      <Col span={2}>
        <Panel>
          <Space between full>
            <span>456</span>
            <BtnString>+</BtnString>
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
            <BtnString>+</BtnString>
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
            <BtnString>+</BtnString>
          </Space>
        </Panel>
      </Col>

      <Col span={2}>
        <Panel center>56</Panel>
      </Col>
    </Row>
  </Space>
)

export default Forums;
