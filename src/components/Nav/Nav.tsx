import React, { FC, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@/elements/'
import Context from '../../context'

import './Nav.scss'

const Nav: FC = () => {
  const fullScreenMode = useContext(Context)
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link" to="/game">
            <Button>
              <span>Играть</span>
            </Button>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/forum">
            <span>Форум</span>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/leaderboard">
            <span>Лидеры</span>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/profile">
            <span>Профиль</span>
          </NavLink>
        </li>
        <li className="nav__item nav__full-screen">
          <Button onClick={fullScreenMode}>Полноэкранный режим</Button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
