import { notification } from 'antd'
import { NotificationProps } from './types'

export const notificationWindow = ({
  type,
  title,
  description,
}: NotificationProps) =>
  notification?.[type]({
    message: title,
    description,
    duration: 2,
    onClose: () => notification.destroy(),
  })