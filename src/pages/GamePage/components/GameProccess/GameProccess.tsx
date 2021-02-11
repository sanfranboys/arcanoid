import React, { useEffect, useRef } from 'react'
import { Col, Row, Centered } from '@/elements/'
import { Sanfranoid, Nullable } from './sanfranoid'

import './GameProccess.scss'

const GameProccess = () => {
  const ref = useRef<Nullable<HTMLCanvasElement>>(null)

  useEffect(() => {
    const canvas = ref.current

    if (canvas) {
      const sanfranoid = new Sanfranoid(canvas)
      sanfranoid.go()
    }
  }, [])

  return (
    <Row>
      <Col span={18} offset={3}>
        <Centered>
          <canvas
            ref={ref}
            className="game-container"
            width="480"
            height="320"
          />
        </Centered>
      </Col>
    </Row>
  )
}

export default GameProccess
