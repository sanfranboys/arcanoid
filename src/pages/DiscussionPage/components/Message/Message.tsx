import React, { FC, useCallback } from 'react'
import { classNames } from 'utils'
import { useDispatch } from 'react-redux'
import { updateMessage } from 'ducks'
import { MessageProps } from './types'

import './Message.scss'

const Message: FC<MessageProps> = ({ message, onAnswer }) => {
  const { id, author, text, likes, dislikes, offset, parentAuthor } = message
  const dispatch = useDispatch()

  const handleEmotion = useCallback(
    (e) => {
      const target = e.target as HTMLButtonElement
      const clicked = target.dataset.emo as 'likes' | 'dislikes'
      const payload = {
        ...message,
        [clicked]: message[clicked] + 1,
      }
      dispatch(updateMessage(payload))
    },
    [message, dispatch]
  )

  const handleAnswer = useCallback(() => {
    onAnswer(author, id)
  }, [onAnswer, author, id])

  return (
    <div
      className={classNames('message', {
        message_offset: offset,
      })}
    >
      <button type="button" className="message__author" onClick={handleAnswer}>
        {author}
      </button>
      <div>
        {parentAuthor && (
          <span className="message__prefix">Ответ {parentAuthor}: </span>
        )}
        {text}
      </div>

      <div className="message__emotion">
        <button
          className="message__emo"
          type="button"
          onClick={handleEmotion}
          data-emo="likes"
        >
          Нравится: {likes}
        </button>
        <button
          className="message__emo"
          type="button"
          onClick={handleEmotion}
          data-emo="dislikes"
        >
          Не нравится: {dislikes}
        </button>
      </div>
    </div>
  )
}

export default Message
