import React from 'react'
// import { useHistory } from 'react-router-dom'
import { ContentBox, Row, Col, Button } from '@/elements/'

const FinishGame = () => {
  // const history = useHistory()
  console.log('hisd')
  return (
    <div className="finish-game">
      <ContentBox>
        <Row gutter={[0, 20]}>
          <Col span={24}>
            <p>Ты Проиграл, или выиграл</p>
          </Col>
          <Col span={24}>
            <Button>
              <p>Попробовать снова</p>
            </Button>
          </Col>
        </Row>
      </ContentBox>
    </div>
  )
}

export default FinishGame
