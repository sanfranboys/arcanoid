import React from 'react'
import ProfileInfo from './components/ProfileInfo'
import Row from '../../elements/Row'
import Col from '../../elements/Col'
import Space from '../../elements/Space'
import BtnString from '../../elements/BtnString'
import Page from '../Page'

const ProfilePage = () => (
  <Page title="Профиль">
    <Row>
      <Col span={8} offset={8}>
        <Space full direction="vertical" align="end">
          <BtnString>Редактировать</BtnString>
        </Space>

        <ProfileInfo />
      </Col>
    </Row>
  </Page>
)

export default ProfilePage
