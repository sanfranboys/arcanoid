import React, { FC } from 'react';
import ForumPage from '../../pages/ForumPage';
import LeaderBordPage from '../../pages/LeaderBordPage';
import ProfilePage from '../../pages/ProfilePage';
import './App.scss'

const App: FC = () => (
  <>
    <ForumPage />
    <LeaderBordPage />
    <ProfilePage />
  </>
)
export default App
