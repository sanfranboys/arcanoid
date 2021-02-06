import React, { FC } from 'react';

import './Centered.scss';

const Centered: FC = (props) => {
  const { children } = props;

  return <div className='centered'>{ children }</div>
}

export default Centered;
