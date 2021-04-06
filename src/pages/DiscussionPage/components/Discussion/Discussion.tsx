import React, { ChangeEvent, FC, useCallback, useMemo, useState } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { createMessage, getProfileUser } from 'ducks'
import { Space, Panel, TextArea, Button, Row, Col } from 'elements'
import withForumSpin from 'hocs/withForumSpin'
import { DiscussionProps, TopicIdParams } from 'pages/DiscussionPage/types'
import Message from '../Message'
import './Discussion.scss'

const Discussion: FC<DiscussionProps> = ({ messages }) => {
  const { topicId } = useParams<TopicIdParams>()
  const [activeMessage, setActiveMessage] = useState('')
  const { login } = useSelector(getProfileUser)
  const dispatch = useDispatch()

  const handleMessageChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setActiveMessage(e.currentTarget.value)
    },
    []
  )

  const addMessage = useCallback(() => {
    const payload = {
      text: activeMessage,
      author: login,
      topicId: Number(topicId),
    }
    dispatch(createMessage(payload))

    setActiveMessage('')
  }, [topicId, activeMessage, login, dispatch])

  const messageList = useMemo(
    () => messages.map((item) => <Message key={item.id} message={item} />),
    [messages]
  )

  return (
    <Space direction="vertical" full size={50}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Panel>
            <Space size={20} direction="vertical" full className="discussion">
              {messageList.length
                ? messageList
                : 'Пока по этой теме нет сообщений, будь первым!)'}
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

export default withForumSpin(Discussion)
