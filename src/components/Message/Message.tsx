import React, { FC } from 'react'
import { classNames } from 'utils'
import { MessageProps } from './types'

import './Message.scss'

const Message: FC<MessageProps> = ({ message: { author, text }, offset }) => (
  <div
    className={classNames('message', {
      message_offset: offset,
    })}
  >
    <span className="message__author">{author}</span>
    <div>{text}</div>
  </div>
)

export default Message