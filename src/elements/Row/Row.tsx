import React, { FC } from 'react'
import { Row as RowComponent, RowProps } from 'antd'

import 'antd/lib/row/style/css'

const Row: FC<RowProps> = (props) => <RowComponent {...props} />

export default Row
