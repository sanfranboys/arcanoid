import React, { useCallback, useState } from 'react'
import ProfileInfo from './components/ProfileInfo'
import ProfileEditForm from './components/ProfileEditForm'
import Row from '../../elements/Row'
import Col from '../../elements/Col'
import Space from '../../elements/Space'
import StringButton from '../../elements/StringButton'
import Page from '../Page'

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
