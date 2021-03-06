import React, { useCallback, useEffect, useRef } from 'react'
import { Col, Row, Centered } from 'elements'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileUser, postNewLeader } from 'ducks'
import { Page } from 'pages'
import { ProfileTypes } from 'pages/ProfilePage/types'
import { useHistory } from 'react-router-dom'
import { Sanfranoid, Nullable } from './sanfranoid'
import './GameProccessPage.scss'

const GameProccessPage = () => {
  const canvasRef = useRef<Nullable<HTMLCanvasElement>>(null)
  const userData: ProfileTypes = useSelector(getProfileUser)
  const dispatch = useDispatch()
  const history = useHistory()

  const onGameEnd = useCallback(
    (score: number) => {
      dispatch(
        postNewLeader({
          sanfranId: userData.id,
          sanfranPlayer: userData.login,
          sanfranScore: score,
        })
      )
      history.push(`/game/finish?score=${score}`)
    },
    [userData, dispatch, history]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    let sanfranoid: Sanfranoid

    if ( canvas ) {
      sanfranoid = new Sanfranoid(canvas, onGameEnd)
      sanfranoid.go()
    }

    return () => sanfranoid && sanfranoid.destroy()
  }, [onGameEnd])

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
