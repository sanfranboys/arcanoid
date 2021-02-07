import React, { FC } from 'react'
import './ContentBox.scss'

const ContentBox: FC = ({ children }) => (
  <div className="form-component">
    <div className="form-component__wrapper">{children}</div>
  </div>
)

export default ContentBox
