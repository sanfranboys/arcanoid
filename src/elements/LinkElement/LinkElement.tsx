import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import classNames from '@/utils/'
import { LinkElementTypes } from './types'
import './LinkElement.scss'

const LinkElement: FC<LinkElementTypes> = ({ className, link, children }) => (
  <Link to={link} className={classNames('link-component', className)}>
    {children}
  </Link>
)
export default LinkElement
