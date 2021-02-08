import React, { FC, useMemo } from 'react'
import { Row, Col } from '@/elements/'
import { Page } from '@/pages/'
import { ErrorPageProps } from './types'
import Error from './components/Error'
import getErrorTexts from './utils/getErrorTexts'

const ErrorPage: FC<ErrorPageProps> = ({ errorType }) => {
  const { title, description, hasLink = false } = getErrorTexts(errorType)

  const errorBody = useMemo(
    () => (
      <Error
        description={description}
        hasLink={hasLink}
        errorType={errorType}
      />
    ),
    [errorType, description, hasLink]
  )

  return (
    <Page title={title}>
      <Row>
        <Col span={24}>{errorBody}</Col>
      </Row>
    </Page>
  )
}

export default ErrorPage
