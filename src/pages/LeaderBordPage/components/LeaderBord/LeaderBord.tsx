import React, { useMemo } from 'react';
import Row from '../../../../components/Row';
import { Player } from '../../types';
import LeaderCard from '../LeaderCard';

import './LeaderBord.scss';

const leaders: Player[] = new Array(8).fill('Player').map((name, idx) => {
  const id = idx + 1;
  return {
    id,
    name: `${name} ${id}`,
    score: 60000 - idx * 8033
  }
});

const LeaderBord = () => {
  const leaderCards = useMemo(() => (
    leaders.map((leader, idx) => (
      <LeaderCard key={leader.id} {...leader} position={idx + 1} />
    ))
  ), [leaders]);

  return (
    <div className='leader-bord'>
      <Row gutter={[16, 16]}>{ leaderCards }</Row>
    </div>
  )
}

export default LeaderBord;
