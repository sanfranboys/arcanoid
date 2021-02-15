import React, { useCallback, useMemo, useState, ChangeEvent } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Row, Col, Space, Button } from '@/elements/'
import { Description, Input } from '@/components/'
import Topic from '../Topic'

import { mock } from './mock'

import './Topics.scss'

const Topics = () => {
  const history = useHistory()
  const { url } = useRouteMatch()
  const [topics, setTopics] = useState(mock)
  const [topic, setTopic] = useState('')

  const handleTopicChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTopic(e.currentTarget.value)
  }, [])

  const goToDiscussion = useCallback(
    (id: number) => () => history.push(`${url}/${id}`),
    [history, url]
  )

  const addTopic = useCallback(() => {
    setTopics((oldTopics) => {
      const newTopics = [...oldTopics]

      newTopics.push({
        id: topics.length + 1,
        name: topic,
        answersCount: topics.length * 44,
      })

      return newTopics
    })

    setTopic('')
  }, [topic])

  const topicList = useMemo(
    () =>
      topics.map((item) => {
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

export default Topics
