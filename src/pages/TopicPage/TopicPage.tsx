import React, { useEffect } from 'react'
import { Row, Col } from 'elements'
import { Page, Return } from 'pages'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { forumGetForum, getForum } from 'ducks'
import { Topics } from './components/Topics'
import { ForumIdParams } from './types'

const TopicPage = () => {
  const dispatch = useDispatch()
  const params = useParams<ForumIdParams>()
  const forum = useSelector(getForum)

  useEffect(() => {
    if (params?.forumId) {
      dispatch(forumGetForum(Number(params.forumId)))
    }
  }, [params, dispatch])

  return (
    <Page title={forum?.title}>
      <Return />
      <Row>
        <Col span={18} offset={4}>
          {forum && <Topics data={forum} />}
        </Col>
      </Row>
    </Page>
  )
}

export default TopicPage
