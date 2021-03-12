import React, { useEffect, useMemo } from 'react'
import { Row } from 'elements'
import { useDispatch, useSelector } from 'react-redux'
import { getLeaders, requestLeaders } from 'ducks'
import { Player } from '../../types'
import LeaderCard from '../LeaderCard'

const LeaderBord = () => {
  const dispatch = useDispatch()
  const leaders: Player[] = useSelector(getLeaders)

  useEffect(() => {
    dispatch(requestLeaders())
  }, [dispatch])

  const leaderCards = useMemo(
    () =>
      leaders.map((leader, idx) => (
        <LeaderCard
          key={leader.sanfranId + leader.sanfranScore}
          {...leader}
          position={idx + 1}
        />
      )),
    [leaders]
  )

  return <Row gutter={[16, 16]}>{leaderCards}</Row>
}

export default LeaderBord
