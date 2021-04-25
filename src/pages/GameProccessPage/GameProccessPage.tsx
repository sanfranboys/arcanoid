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
  const audioRef = useRef<Nullable<HTMLMediaElement>>(null)
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
      history.push(`/game/finish?score=${score}`);
      if(audioRef.current){
        audioRef.current.pause()
      }
    },
    [userData, dispatch, history, audioRef]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    let sanfranoid: Sanfranoid

    if ( canvas && audioRef.current) {
      sanfranoid = new Sanfranoid(canvas, onGameEnd, audioRef.current)
      sanfranoid.go()
      audioRef.current.play()
    }

    return () => sanfranoid && sanfranoid.destroy()
  }, [onGameEnd, audioRef])

  return (
    <Page>
      <audio
      ref={audioRef}
      loop
      src='assets/music/game_music.mp3'>
        <source
        src="assets/music/game_music.mp3"
        type="audio/mp3" />
        <track
        kind="captions"
        src='assets/music/game_music.mp3'/>
      </audio>
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
