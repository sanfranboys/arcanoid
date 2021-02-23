import React, { useEffect, useRef } from 'react'
import { Col, Row, Centered } from '@/elements/'
import { Page } from '@/pages/'
import { Sanfranoid, Nullable } from './sanfranoid'

import './GameProccessPage.scss'

const GameProccessPage = () => {
  const canvasRef = useRef<Nullable<HTMLCanvasElement>>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    let sanfranoid: Sanfranoid

    if (canvas) {
      sanfranoid = new Sanfranoid(canvas)
      sanfranoid.go()
    }

    return () => sanfranoid && sanfranoid.destroy()
  }, [])

  return (
    <Page>
      <Row>
        <Col span={18} offset={3}>
          <Centered>
            <canvas
              ref={canvasRef}
              className="game-container"
              width="1600"
              height="700"
            />
          </Centered>
        </Col>
      </Row>
    </Page>
  )
}

export default GameProccessPage
