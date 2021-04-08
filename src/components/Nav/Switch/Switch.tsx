import React, { ChangeEvent, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
  getProfileUser,
  requestThemeAction,
  getThemeUser,
  getIsAuth,
  getUserThemeAction,
  isLoadingTheme } from 'ducks'

import './Switch.scss'

const Switch: React.FC = () => {

  const isAuth = useSelector(getIsAuth)
  const theme = useSelector(getThemeUser)
  const loading = useSelector(isLoadingTheme)
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()
  const { id } = useSelector(getProfileUser)

  React.useEffect(() => {
    if(isAuth){
      dispatch(getUserThemeAction({userId:id}))
    }
  }, [ id, dispatch, isAuth ])

  React.useEffect(() => {
    setActive(theme !== 'default-theme');
    document.body.className = theme;
  }, [ theme, setActive ])

  const handleChangeUser = (e:ChangeEvent<HTMLInputElement>) => {
    let currentTheme;
    setActive(!active)
    if (active) {
      currentTheme = 1
    } else {
      currentTheme = 2
    }
    e.target.blur();
    dispatch(requestThemeAction({ userId: id, theme: currentTheme }));
  }

  return (
    <div className="swich">
      {isAuth ? (<label htmlFor="swich" className="swich__box">
        <input
        type="checkbox"
        className="swich-input"
        id="swich"
        checked={active}
        onChange={handleChangeUser}
        disabled={loading}/>
        <div className='swich__box-button' />
      </label>) : null}
    </div>
  )
}
export default Switch
