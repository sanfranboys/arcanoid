import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ContentBox, Row, Col, Button, Image } from 'elements'
import { Page } from 'pages'
import FinishGameData from './mock'
import './FinishGamePage.scss'

const FinishGamePage = () => {
  const [score, setScore] = useState<string | null>(null)
  const history = useHistory()
  const {
    description,
    scoreText,
    image,
    leaderbordLink,
    restartLink,
  } = FinishGameData

  useEffect(() => {
    const params = new URLSearchParams(history.location.search)
    if (!params.get('score')) {
      history.push('/game')
    }
    setScore(params.get('score'))
  }, [history])

  return (
    <Page>
      <div className="finish-game">
        <ContentBox>
          <Row gutter={[0, 20]}>
            <Col span={24}>
              <h2 className="finish-game__title">{description}</h2>
              <p className="finish-game__scoreText">{scoreText}</p>
              <p className="finish-game__score">{score}</p>
            </Col>
            <Col span={24}>
              <Image className="finish-game__image" src={image} />
            </Col>
            <Col span={24}>
              <Link to={leaderbordLink.href}>
                <Button>{leaderbordLink.label}</Button>
              </Link>
            </Col>
            <Col span={24}>
              <Link to={restartLink.href}>
                <Button>{restartLink.label}</Button>
              </Link>
            </Col>
          </Row>
        </ContentBox>
      </div>
    </Page>
  )
}

export default FinishGamePage
