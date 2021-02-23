import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getProfileUser,
  userChangeProfileAction,
  userChangeAvatarAction,
} from '@/ducks'
import { Row, Col, Space, StringButton } from '@/elements/'
import { Page } from '@/pages/'
import { RcFile } from 'antd/lib/upload'
import ProfileInfo from './components/ProfileInfo'
import ProfileEditForm from './components/ProfileEditForm/ProfileEditForm'
import { ProfileTypes } from './types'

enum ProfilePageMode {
  Edit = 'Редактировать',
  Info = 'Информация',
}

const ProfilePage = () => {
  const [isEditMode, setIsEditMode] = useState(false)

  const dispatch = useDispatch()
  const userData: ProfileTypes = useSelector(getProfileUser)

  const toggleProfilePageMode = useCallback(() => {
    setIsEditMode((editMode) => !editMode)
  }, [])

  const onSubmit = useCallback((data: ProfileTypes) => {
    dispatch(userChangeProfileAction(data))
  }, [])

  const handleChangeAvatar = useCallback((file: RcFile) => {
    const data = new FormData()
    data.append('avatar', file)
    dispatch(userChangeAvatarAction(data))
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
          {isEditMode ? (
            <ProfileEditForm
              {...userData}
              changeAvatar={handleChangeAvatar}
              onSubmit={onSubmit}
            />
          ) : (
            <ProfileInfo {...userData} />
          )}
        </Col>
      </Row>
    </Page>
  )
}

export default ProfilePage
