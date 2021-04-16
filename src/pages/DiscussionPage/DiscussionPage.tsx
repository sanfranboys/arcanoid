import React, { useEffect } from 'react'
import { Page, Return } from 'pages'
import { Col, Row } from 'elements'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { forumGetTopic, getTopic } from 'ducks'
import { Discussion } from './components/Discussion'
import { TopicIdParams } from './types'

const DiscussionPage = () => {
  const dispatch = useDispatch()
  const params = useParams<TopicIdParams>()
  const topic = useSelector(getTopic)

  useEffect(() => {
    if (params?.forumId) {
      dispatch(forumGetTopic(Number(params.topicId)))
    }
  }, [params, dispatch])

  return (
    <Page title={topic?.title}>
      <Return />
      <Row>
        <Col span={18} offset={4}>
          {topic && <Discussion messages={topic?.messages} />}
        </Col>
      </Row>
    </Page>
  )
}

export default DiscussionPage
