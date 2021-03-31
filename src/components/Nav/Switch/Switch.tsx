import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getProfileUser, requestThemeAction, getThemeUser } from 'ducks'

import './Switch.scss'

const Switch: React.FC = () => {

  const theme = useSelector(getThemeUser)
  const [active, setActive] = useState(theme !== 'default-theme')
  const dispatch = useDispatch()
  const { id } = useSelector(getProfileUser)


  React.useEffect(() => {
    document.body.className = theme
  }, [theme])

  const handleChangeUser = () => {
    let currentTheme;
    setActive(!active)
    if (active) {
      currentTheme = 1
    } else {
      currentTheme = 2
    }
    dispatch(requestThemeAction({ userId: id, theme: currentTheme }))
  }

  return (
    <div className="swich">
      <label htmlFor="swich" className="swich__box">
        <input type="checkbox" className="swich-input" id="swich" checked={active} onChange={handleChangeUser} />
        <div className='swich__box-button' />
      </label>
    </div>
  )
}
export default Switch
