import React, { FC } from 'react'
import ErrorPage from '../../pages/ErrorPage'
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
    <ErrorPage errorType={404} />
    <AuthPage />
  </>
)
export default App
