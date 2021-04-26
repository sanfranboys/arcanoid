import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Col, Panel, Row, Space, TextArea } from 'elements'
import Message from 'components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { Page } from '../index'
import {
  getProfileUser,
  getFeedbacks,
  fetchFeedbacks,
  createFeedback,
} from '../../ducks'
import { Event } from './types'
import { UserTypes } from '../../ducks/user/types'
import { Feedback } from '../../ducks/feedback/types'

const FeedbackPage = () => {
  const dispatch = useDispatch()
  const user: UserTypes = useSelector(getProfileUser)
  const feedbacks: Feedback[] = useSelector(getFeedbacks)
  const [message, setMessage] = useState('')

  useEffect(() => {
    dispatch(fetchFeedbacks())
  }, [dispatch])

  const create = useCallback(() => {
    dispatch(
      createFeedback({
        author: user.display_name || user.first_name,
        text: message,
      })
    )

    setMessage('')
  }, [dispatch, message, user])

  const write = useCallback(
    (e: Event) => {
      setMessage(e.currentTarget.value)
    },
    [setMessage]
  )

  const feedbackComponentList = useMemo(
    () =>
      feedbacks.map((feedback, idx) => (
        <Message key={feedback.id} message={feedback} offset={!!(idx % 2)} />
      )),
    [feedbacks]
  )

  return (
    <Page title="Отзывы">
      <Row>
        <Col span={18} offset={4}>
          <Space direction="vertical" full size={50}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Panel>
                  <Space
                    size={20}
                    direction="vertical"
                    full
                    className="discussion"
                  >
                    {feedbackComponentList}
                  </Space>
                </Panel>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Space direction="vertical" full size="large">
                  <TextArea rows={3} onChange={write} value={message} />

                  <Button onClick={create} disabled={!message.trim()}>
                    Отправить
                  </Button>
                </Space>
              </Col>
            </Row>
          </Space>
        </Col>
      </Row>
    </Page>
  )
}

export default FeedbackPage
