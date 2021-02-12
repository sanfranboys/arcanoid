import React from 'react'
import { Link } from 'react-router-dom'
import { ContentBox, Row, Col, Button, Image } from '@/elements/'
import FinishGameData from './mock'
import './FinishGame.scss'

const FinishGame = () => {
  const {
    description,
    scoreText,
    score,
    image,
    leaderbordLink,
    restartLink,
  } = FinishGameData

  return (
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
  )
}

export default FinishGame
