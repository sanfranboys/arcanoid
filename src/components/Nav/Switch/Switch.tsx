import React, { SyntheticEvent, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getProfileUser, requestThemeAction, getThemeUser, getIsAuth } from 'ducks'

import './Switch.scss'

const Switch: React.FC = () => {

  const isAuth = useSelector(getIsAuth)
  const theme = useSelector(getThemeUser)
  const [active, setActive] = useState(theme !== 'default-theme')
  const dispatch = useDispatch()
  const { id } = useSelector(getProfileUser)


  React.useEffect(() => {
    document.body.className = theme
  }, [theme])

  const handleChangeUser = (e:SyntheticEvent) => {
    let currentTheme;
    setActive(!active)
    if (active) {
      currentTheme = 1
    } else {
      currentTheme = 2
    }
    (e.target as HTMLInputElement).blur();
    dispatch(requestThemeAction({ userId: id, theme: currentTheme }));
  }

  return (
    <div className="swich">
      {isAuth ? (<label htmlFor="swich" className="swich__box">
        <input type="checkbox" className="swich-input" id="swich" checked={active} onClick={handleChangeUser} />
        <div className='swich__box-button' />
      </label>) : null}

    </div>
  )
}
export default Switch
