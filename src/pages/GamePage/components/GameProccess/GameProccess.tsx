import React, { useEffect, useRef } from 'react'
import { Col, Row } from '@/elements/'
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
        <canvas
          ref={ref}
          className="game-container"
          width="1200"
          height="750"
        />
      </Col>
    </Row>
  )
}

export default GameProccess
