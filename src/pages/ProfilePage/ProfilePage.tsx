import React from 'react'
import { Row, Col, Space, BtnString } from '@/elements/'
import { Page } from '@/pages/'
import ProfileInfo from './components/ProfileInfo'

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
