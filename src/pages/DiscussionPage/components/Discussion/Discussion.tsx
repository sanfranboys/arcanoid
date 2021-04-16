import React, { ChangeEvent, FC, useCallback, useMemo, useState } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { createMessage, getProfileUser } from 'ducks'
import { Space, Panel, TextArea, Button, Row, Col } from 'elements'
import withForumSpin from 'hocs/withForumSpin'
import { DiscussionProps, TopicIdParams } from 'pages/DiscussionPage/types'
import './Discussion.scss'
import Message from 'components/Message'
import { getMessageList } from './utils'
import { AnswerData } from './type'

const Discussion: FC<DiscussionProps> = ({ messages }) => {
  const { topicId } = useParams<TopicIdParams>()
  const [activeMessage, setActiveMessage] = useState('')
  const [answerData, setAnswerData] = useState<AnswerData | null>(null)
  const { login } = useSelector(getProfileUser)
  const dispatch = useDispatch()

  const transformedMessages = messages.length
    ? getMessageList(messages)
    : messages

  const handleMessageChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setActiveMessage(e.currentTarget.value)
    },
    []
  )

  const handleAnswer = useCallback((author: string, id: number) => {
    setAnswerData({ author, id })
  }, [])

  const handleAnswerClear = useCallback(() => {
    setAnswerData(null)
  }, [])

  const getAnswerText = useMemo(
    () => (
      <div className="discussion__answers">
        <div className="discussion__answerPrefix">
          Ответ {answerData?.author}:
        </div>
        <button
          className="discussion__answerClear"
          type="button"
          onClick={handleAnswerClear}
          aria-label="clear answer"
        />
      </div>
    ),
    [answerData, handleAnswerClear]
  )

  const addMessage = useCallback(() => {
    const payload = {
      text: activeMessage,
      author: login,
      topicId: Number(topicId),
      likes: 0,
      dislikes: 0,
      parentAuthor: answerData?.author,
      parentId: answerData?.id,
    }
    dispatch(createMessage(payload))

    setActiveMessage('')
  }, [topicId, activeMessage, login, dispatch, answerData])

  const messageList = useMemo(
    () =>
      transformedMessages.map((item) => (
        <Message key={item?.id} message={item} onAnswer={handleAnswer} />
      )),
    [transformedMessages, handleAnswer]
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
          {answerData && getAnswerText}
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
