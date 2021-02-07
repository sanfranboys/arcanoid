import React, { FC } from 'react'
import { Input } from 'antd'
import { TextAreaProps } from 'antd/lib/input'

import 'antd/lib/input/style/css'

import './TextArea.scss'

const { TextArea: AntdTextArea } = Input

const TextArea: FC<TextAreaProps> = (props) => (
  <AntdTextArea {...props} className="textarea" />
)

export default TextArea
