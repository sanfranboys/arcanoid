import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Col from '../../../../components/Col';
import Space from '../../../../components/Space';
import { Leader } from '../../types';
import classNames from '../../../../utils';

import './LeaderCard.scss'

const LeaderCard: FC<Leader> = (props) => {
  const { position, name, score } = props;

  return (
    <Col span={8}>
      <div className="leader-card">
        <div className="leader-card__head">
          <Space>
            <span className="leader-card__position">
              { position }
              .
            </span>
            <span className="leader-card__name">{ name }</span>
          </Space>
        </div>

        <div className="leader-card__body">
          <span
            className={classNames('leader-card__score', { 'leader-card__score_small': position > 3 })}
          >
            { score }
          </span>
        </div>
      </div>
    </Col>
  )
}

LeaderCard.propTypes = {
  position: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
}

export default LeaderCard;
