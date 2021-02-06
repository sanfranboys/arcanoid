import React, { FC } from 'react'
import Row from '../../components/Row'
import Col from '../../components/Col'
import Page from '../Page'
import { ErrorPageProps } from './types'
import Error from './components/Error'
import getErrorTexts from './utils/getErrorTexts'

const ErrorPage: FC<ErrorPageProps> = ({ errorType }) => {
  const { title, description } = getErrorTexts(errorType)
  const hasLink: boolean = errorType === 404
  return (
    <Page title={title}>
      <Row>
        <Col span={24}>
          <Error
            description={description}
            hasLink={hasLink}
            errorType={errorType}
          />
        </Col>
      </Row>
    </Page>
  )
}

export default ErrorPage
