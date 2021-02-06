import React from 'react';
import ProfileInfo from './components/ProfileInfo';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Space from '../../components/Space';
import BtnString from '../../components/BtnString';
import Page from '../Page';

const ProfilePage = () => (
  <Page title='Профиль'>
    <Row>
      <Col span={8} offset={8}>
        <Space full direction='vertical' align='end'>
          <BtnString>Редактировать</BtnString>
        </Space>

        <ProfileInfo />
      </Col>
    </Row>
  </Page>
)

export default ProfilePage;
