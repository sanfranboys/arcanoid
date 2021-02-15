import React, { FC } from 'react'
import { Col as ColComponent, ColProps } from 'antd'

import 'antd/lib/col/style/css'

const Col: FC<ColProps> = (props) => <ColComponent {...props} />

export default Col
