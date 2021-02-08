import React, { useCallback, useState } from 'react'
import { Row, Col, Space, StringButton } from '@/elements/'
import { Page } from '@/pages/'
import ProfileInfo from './components/ProfileInfo'
import ProfileEditForm from './components/ProfileEditForm/ProfileEditForm'

enum ProfilePageMode {
  Edit = 'Редактировать',
  Info = 'Информация',
}

const ProfilePage = () => {
  const [isEditMode, setIsEditMode] = useState(false)

  const toggleProfilePageMode = useCallback(() => {
    setIsEditMode((editMode) => !editMode)
  }, [])

  return (
    <Page title="Профиль">
      <Row>
        <Col span={8} offset={8}>
          <Space full direction="vertical" align="end">
            <StringButton onClick={toggleProfilePageMode}>
              {isEditMode ? ProfilePageMode.Info : ProfilePageMode.Edit}
            </StringButton>
          </Space>

          {isEditMode ? <ProfileEditForm /> : <ProfileInfo />}
        </Col>
      </Row>
    </Page>
  )
}

export default ProfilePage
