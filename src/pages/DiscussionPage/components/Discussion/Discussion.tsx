import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { Space, Panel, TextArea, Button, Row, Col } from '@/elements/'
import classNames from '../../../../utils'
import { mock } from './mock'

import './Discussion.scss'

const Discussion = () => {
  const [messages, setMessages] = useState(mock)
  const [message, setMessage] = useState('')

  const handleMessageChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.currentTarget.value)
    },
    []
  )

  const addMessage = () => {
    setMessages((oldMessages) => {
      const messages = [...oldMessages]
      const { length } = messages

      messages.push({
        id: length + 1,
        text: message,
        author: `author${length}`,
      })

      return messages
    })

    setMessage('')
  }

  const messageList = useMemo(
    () =>
      messages.map((message, idx) => {
        const { id, text, author } = message

        const className = classNames('discussion__message', {
          discussion__message_odd: !!(idx % 2),
        })

        return (
          <div className={className} key={id}>
            <span className="discussion__author">{author}</span>
            <div>{text}</div>
          </div>
        )
      }),
    [messages]
  )

  return (
    <Space direction="vertical" full size={50} className="discussion">
      <Row gutter={[16, 16]}>
        <Col span={18} offset={3}>
          <Panel head="Как вам дизайн?">
            <Space
              size={20}
              direction="vertical"
              full
              className="discussion__messages"
            >
              {messageList}
            </Space>
          </Panel>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={18} offset={3}>
          <Space direction="vertical" full size="large">
            <TextArea rows={3} onChange={handleMessageChange} value={message} />

            <Button onClick={addMessage} disabled={!message.trim()}>
              Отправить
            </Button>
          </Space>
        </Col>
      </Row>
    </Space>
  )
}

export default Discussion
