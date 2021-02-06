import React, { FC } from 'react'
import AuthPage from '../../pages/AuthPage'
import LeaderBordPage from '../../pages/LeaderBordPage'
import './App.scss'

const App: FC = () => (
  <div>
    <h1>Arcanoid runs well</h1>
    <LeaderBordPage />
    <AuthPage />
  </div>
)
export default App
