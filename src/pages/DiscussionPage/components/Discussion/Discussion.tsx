import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { Space, Panel, TextArea, Button, Row, Col } from '@/elements/'
import Message from '../Message'
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

  const addMessage = useCallback(() => {
    setMessages((oldMessages) => {
      const newMessages = [...oldMessages]
      const { length } = newMessages

      newMessages.push({
        id: length + 1,
        text: message,
        author: `author${length}`,
      })

      return newMessages
    })

    setMessage('')
  }, [message])

  const messageList = useMemo(
    () =>
      messages.map((item, idx) => (
        <Message key={item.id} message={item} odd={!!(idx % 2)} />
      )),
    [messages]
  )

  return (
    <Space direction="vertical" full size={50}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Panel head="Как вам дизайн?">
            <Space size={20} direction="vertical" full className="discussion">
              {messageList}
            </Space>
          </Panel>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={24}>
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
