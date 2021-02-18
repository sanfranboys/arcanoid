import React, { useCallback, useMemo } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Row, Col, Space } from '@/elements/'
import { Description } from '@/components/'
import { Page } from '@/pages/'
import Forum from './components/Forum'
import { mock } from './mock'

const ForumsPage = () => {
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
    <Page title="Форум">
      <Row>
        <Col span={18} offset={4}>
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
        </Col>
      </Row>
    </Page>
  )
}

export default ForumsPage
