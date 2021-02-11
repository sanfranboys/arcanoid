import React, { FC } from 'react'
import { Modal as ModalAnt, ModalProps } from 'antd'
import 'antd/lib/modal/style/css'

const Modal: FC<ModalProps> = ({ children, ...prop }) => (
  <ModalAnt {...prop}>{children}</ModalAnt>
)

export default Modal

/*
 <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

*/
