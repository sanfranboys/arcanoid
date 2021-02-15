import React, { FC } from 'react'
import { Modal as ModalComponent, ModalProps } from 'antd'
import 'antd/lib/modal/style/css'
import './Modal.scss'

const Modal: FC<ModalProps> = ({ children, ...prop }) => (
  <ModalComponent {...prop}>{children}</ModalComponent>
)

export default Modal
