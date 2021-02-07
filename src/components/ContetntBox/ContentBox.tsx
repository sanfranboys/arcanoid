import React, { FC } from 'react'
import './ContentBox.scss'

const ContentBox: FC = ({ children }) => (
  <div className="content-box">
    <div className="content-box__wrapper">{children}</div>
  </div>
)

export default ContentBox
