import React, { FC } from 'react'
import classNames from '@/utils/'
import { MessageProps } from './types'

import './Message.scss'

const Message: FC<MessageProps> = (props) => {
  const {
    message: { author, text },
    odd,
  } = props

  const className = classNames('message', {
    message_odd: odd,
  })

  return (
    <div className={className}>
      <span className="message__author">{author}</span>
      <div>{text}</div>
    </div>
  )
}

export default Message
