import React, {FC} from 'react';
import { Space as AntdSpace, SpaceProps } from 'antd';

import 'antd/lib/space/style/index.css';

const Space: FC<SpaceProps> = (props) => (<AntdSpace {...props} />);

export default Space;
