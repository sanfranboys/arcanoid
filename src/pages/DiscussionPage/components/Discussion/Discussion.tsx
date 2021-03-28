import React, { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { Space, Panel, TextArea, Button, Row, Col } from 'elements'
import Message from 'components/Message'
import { mock } from './mock'

import './Discussion.scss'

const Discussion = () => {
  const [messages, setMessages] = useState(mock)
  const [activeMessage, setActiveMessage] = useState('')

  const handleMessageChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setActiveMessage(e.currentTarget.value)
    },
    []
  )

  const addMessage = useCallback(() => {
    setMessages((oldMessages) => {
      const newMessages = [...oldMessages]
      const { length } = newMessages

      newMessages.push({
        id: length + 1,
        text: activeMessage,
        author: `author${length}`,
      })

      return newMessages
    })

    setActiveMessage('')
  }, [activeMessage])

  const messageList = useMemo(
    () =>
      messages.map((item, idx) => (
        <Message key={item.id} message={item} offset={!!(idx % 2)} />
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
            <TextArea
              rows={3}
              onChange={handleMessageChange}
              value={activeMessage}
            />
            <Button onClick={addMessage} disabled={!activeMessage.trim()}>
              Отправить
            </Button>
          </Space>
        </Col>
      </Row>
    </Space>
  )
}

export default Discussion
