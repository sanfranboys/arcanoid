import React, { FC, useCallback, useMemo } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Row, Col, Space } from 'elements'
import { Description } from 'components'
import withForumSpin from 'hocs/withForumSpin'
import Forum from '../Forum'
import { ForumsProps } from './types'

const Forums: FC<ForumsProps> = ({ forums }) => {
  const history = useHistory()
  const { url } = useRouteMatch()

  const goToTopic = useCallback(
    (id: number) => () => history.push(`${url}/${id}`),
    [history, url]
  )

  const forumList = useMemo(
    () =>
      forums.map((forum) => {
        const { id } = forum
        return <Forum key={id} forum={forum} onClick={goToTopic(id)} />
      }),
    [goToTopic, forums]
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
      </Row>

      {forums && forumList}
    </Space>
  )
}

export default withForumSpin(Forums)
