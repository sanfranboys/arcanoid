import React, { useCallback, useMemo, useState, ChangeEvent } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Row, Col, Space, Panel, Button } from '@/elements/'
import { Description, Input } from '@/components/'

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

  const addTopic = () => {
    setTopics((oldTopics) => {
      const topics = [...oldTopics]

      topics.push({
        id: topics.length + 1,
        name: topic,
      })

      return topics
    })

    setTopic('')
  }

  const topicList = useMemo(
    () =>
      topics.map((forum, idx) => {
        const { id, name } = forum

        return (
          <Row gutter={[16, 16]} key={id}>
            <Col span={22} onClick={goToDiscussion(id)}>
              <Panel hoverable>{name}</Panel>
            </Col>

            <Col span={2}>
              <Panel center>{(idx + 1) * 47}</Panel>
            </Col>
          </Row>
        )
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
