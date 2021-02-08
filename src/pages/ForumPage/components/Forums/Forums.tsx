import React, { useCallback, useMemo } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Row, Col, Space, Panel } from '@/elements/'
import { Description } from '@/components/'
import { mock } from './mock'

const Forums = () => {
  const history = useHistory()
  const { url } = useRouteMatch()

  const goToTopic = useCallback(
    (id: number) => () => history.push(`${url}/${id}`),
    [history, url]
  )

  const forumList = useMemo(
    () =>
      mock.map((forum, idx) => {
        const { id, name } = forum

        return (
          <Row gutter={[16, 16]} key={id}>
            <Col span={20} onClick={goToTopic(id)}>
              <Panel hoverable>{name}</Panel>
            </Col>

            <Col span={2}>
              <Panel center>{(idx + 1) * 33}</Panel>
            </Col>

            <Col span={2}>
              <Panel center>{(idx + 1) * 47}</Panel>
            </Col>
          </Row>
        )
      }),
    [goToTopic]
  )

  return (
    <Space direction="vertical" full>
      <Row gutter={[16, 16]}>
        <Col span={20}>
          <Description title="Форумы" />
        </Col>

        <Col span={2}>
          <Description title="Темы" />
        </Col>

        <Col span={2}>
          <Description title="Ответы" />
        </Col>
      </Row>

      {forumList}
    </Space>
  )
}

export default Forums
