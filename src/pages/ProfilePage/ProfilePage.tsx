import React, { useCallback, useEffect, useState } from 'react'
import { Row, Col, Space, StringButton } from '@/elements/'
import { AuthServices, UserServices } from '@/services/'
import { Page } from '@/pages/'
import ProfileInfo from './components/ProfileInfo'
import ProfileEditForm from './components/ProfileEditForm/ProfileEditForm'

import { ProfileTypes } from './types'

enum ProfilePageMode {
  Edit = 'Редактировать',
  Info = 'Информация',
}

const ProfilePage = () => {
  const [isEditMode, setIsEditMode] = useState(false)

  const [userData, setUserData] = useState<ProfileTypes>({
    first_name: '',
    second_name: '',
    login: '',
    email: '',
    display_name: '',
    phone: '',
    avatar: null,
  })

  useEffect(() => {
    AuthServices.getUserInfo().then((data: ProfileTypes) => {
      setUserData(data)
    })
  }, [])

  const toggleProfilePageMode = useCallback(() => {
    setIsEditMode((editMode) => !editMode)
  }, [])

  const onSubmit = (data: ProfileTypes) => {
    UserServices.changeUserProfile(data).then((data: ProfileTypes) =>
      setUserData(data)
    )
  }

  return (
    <Page title="Профиль">
      <Row>
        <Col span={8} offset={8}>
          <Space full direction="vertical" align="end">
            <StringButton onClick={toggleProfilePageMode}>
              {isEditMode ? ProfilePageMode.Info : ProfilePageMode.Edit}
            </StringButton>
          </Space>
          {isEditMode ? (
            <ProfileEditForm {...userData} onSubmit={onSubmit} />
          ) : (
            <ProfileInfo {...userData} />
          )}
        </Col>
      </Row>
    </Page>
  )
}

export default ProfilePage
