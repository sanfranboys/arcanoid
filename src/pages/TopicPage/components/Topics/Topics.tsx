import React, { useCallback, useMemo, useState, ChangeEvent, FC } from 'react'
import { useHistory, useParams, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ForumIdParams } from 'pages/TopicPage/types'
import { Row, Col, Space, Button } from 'elements'
import { Description, Input } from 'components'

import { TopicItemWithCounts } from 'ducks/forum/types'
import { createTopic } from 'ducks'
import withForumSpin from 'hocs/withForumSpin'
import { TopicsProps } from './types'
import Topic from '../Topic'

import './Topics.scss'

const Topics: FC<TopicsProps> = ({ data }) => {
  const history = useHistory()
  const { url } = useRouteMatch<string>()
  const params = useParams<ForumIdParams>()
  const dispatch = useDispatch()
  const { topics } = data
  const [topic, setTopic] = useState('')

  const handleTopicChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTopic(e.currentTarget.value)
  }, [])

  const goToDiscussion = useCallback(
    (id: number) => () => history.push(`${url}/${id}`),
    [history, url]
  )

  const addTopic = useCallback(() => {
    const payload = {
      title: topic,
      forumId: Number(params?.forumId),
    }
    dispatch(createTopic(payload))
    setTopic('')
  }, [topic, params, dispatch])

  const topicList = useMemo(
    () =>
      topics.map((item: TopicItemWithCounts) => {
        const { id } = item
        return <Topic key={id} topic={item} onClick={goToDiscussion(id)} />
      }),
    [goToDiscussion, topics]
  )

  return (
    <Space direction="vertical" full className="topics">
      <Row gutter={[16, 16]} className="topics__add-block">
        <Col span={11} offset={10}>
          <Input value={topic} onChange={handleTopicChange} />
        </Col>

        <Col span={3}>
          <Button
            className="topics__add"
            onClick={addTopic}
            disabled={!topic.trim()}
          >
            Добавить
          </Button>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={22}>
          <Description title="Темы" />
        </Col>

        <Col span={2}>
          <Description title="Ответы" />
        </Col>
      </Row>

      {topicList}
    </Space>
  )
}

export default withForumSpin(Topics)
