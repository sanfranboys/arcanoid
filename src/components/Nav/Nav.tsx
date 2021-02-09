import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@/elements/'

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
          <span>Доска лидеров</span>
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink className="nav__link" to="/profile">
          <span>Профиль</span>
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Nav
