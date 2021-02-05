import React, {FC} from 'react';
import { Space as AntdSpace, SpaceProps as AntdSpaceProps } from 'antd';
import classNames from '../../utils';

import 'antd/lib/space/style/css';

import './Space.scss';

export type SpaceProps = {
  full?: boolean
} & AntdSpaceProps;

const Space: FC<SpaceProps> = (props) => {
  const { full } = props;

  return (
    <AntdSpace
      {...props}
      className={classNames('space', {'space_full-width': full})}
    />
  )
};

export default Space;
