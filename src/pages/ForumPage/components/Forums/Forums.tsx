import React, { useCallback, useMemo } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Row, Col, Space } from 'elements/'
import { Description } from 'components/'
import Forum from '../Forum'
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
      mock.map((forum) => {
        const { id } = forum
        return <Forum key={id} forum={forum} onClick={goToTopic(id)} />
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
