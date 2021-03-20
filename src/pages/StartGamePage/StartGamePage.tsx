import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { ContentBox, Row, Col, Button, Image } from 'elements'
import { Page } from 'pages'
import StartData from './mock'

const StartGamePage = () => {
  const history = useHistory()
  const { description, buttonLabel, titleImage, dogImage } = StartData

  const onSubmit = useCallback(() => {
    history.push('/game/proccess')
  }, [history])

  return (
    <Page>
      <div className="start-game">
        <ContentBox>
          <Row gutter={[0, 20]}>
            <Col span={24}>
              <Image className="start-game__image" src={titleImage} />
            </Col>
            <Col span={24}>{description}</Col>
          </Row>
          <Row gutter={[0, 30]}>
            <Col span={24}>
              <Image className="start-game__image" src={dogImage} />
            </Col>
            <Col span={24}>
              <Button type="button" onClick={onSubmit}>
                {buttonLabel}
              </Button>
            </Col>
          </Row>
        </ContentBox>
      </div>
    </Page>
  )
}

export default StartGamePage
