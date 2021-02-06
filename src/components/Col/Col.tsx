import React, { FC } from 'react'
import { Col as AntdCol, ColProps } from 'antd'

import 'antd/lib/col/style/css'

const Col: FC<ColProps> = (props) => <AntdCol {...props} />

export default Col
