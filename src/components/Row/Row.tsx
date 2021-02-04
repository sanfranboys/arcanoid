import React, {FC} from 'react';
import { Row as AntdRow, RowProps } from 'antd';

import 'antd/lib/row/style/css';

const Row: FC<RowProps> = (props) => (<AntdRow {...props} />);

export default Row;
