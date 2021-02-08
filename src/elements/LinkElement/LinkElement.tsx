import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { LinkElementTypes } from './types'
import classNames from '../../utils'
import './LinkElement.scss'

const LinkElement: FC<LinkElementTypes> = ({ className, link, children }) => (
  <Link to={link} className={classNames('link-component', className)}>
    {children}
  </Link>
)
export default LinkElement
