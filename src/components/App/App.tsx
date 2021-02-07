import React, { FC } from 'react'
import AuthPage from '../../pages/AuthPage'
import ForumPage from '../../pages/ForumPage'
import LeaderBordPage from '../../pages/LeaderBordPage'
import ProfilePage from '../../pages/ProfilePage'
import './App.scss'

const App: FC = () => (
  <>
    <ForumPage />
    <LeaderBordPage />
    <ProfilePage />
    <AuthPage />
  </>
)
export default App
