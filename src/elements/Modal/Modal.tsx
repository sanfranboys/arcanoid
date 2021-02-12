import React, { FC } from 'react'
import { Modal as ModalAnt, ModalProps } from 'antd'
import 'antd/lib/modal/style/css'
import './Modal.scss'

const Modal: FC<ModalProps> = ({ children, ...prop }) => (
  <ModalAnt {...prop}>{children}</ModalAnt>
)

export default Modal
