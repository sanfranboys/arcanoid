import React, { useEffect } from 'react'
import { Row, Col } from 'elements'
import { Page } from 'pages'
import { useDispatch, useSelector } from 'react-redux'
import { forumGetForums, getForums } from 'ducks'
import { Forums } from './components/Forums'

const ForumPage = () => {
  const forums = useSelector(getForums)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(forumGetForums())
  }, [dispatch])

  return (
    <Page title="Форум">
      <Row>
        <Col span={18} offset={4}>
          <Forums forums={forums} />
        </Col>
      </Row>
    </Page>
  )
}

export default ForumPage
