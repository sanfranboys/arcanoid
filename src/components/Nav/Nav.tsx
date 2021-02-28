import React, { FC } from 'react'

import { NavLink } from 'react-router-dom'
import { Button } from 'elements'
import { toggleFullScreen } from 'utils'
import { root } from '@/constants'

import './Nav.scss'

const Nav: FC = () => (
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
        <Button onClick={toggleFullScreen(root)}>Полноэкранный режим</Button>
      </li>
    </ul>
  </nav>
)

export default Nav
