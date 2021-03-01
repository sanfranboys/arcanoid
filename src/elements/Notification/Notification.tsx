import { notification } from 'antd'
import { titleNotificationWindow } from './constants'
import { NotificationProps } from './types'
import 'antd/lib/notification/style/css'

const NotificationWindow = ({
  status,
  type = 'warning',
  description,
}: NotificationProps) => {
  if (status === 0) {
    return notification?.error({
      message: titleNotificationWindow.error,
      description: 'Нет доступа к интернету, проверте соединение',
      duration: 2,
      onClose: () => notification.destroy(),
    })
  }
  return notification?.[type]({
    message: titleNotificationWindow[type],
    description,
    duration: 2,
    onClose: () => notification.destroy(),
  })
}

export default NotificationWindow
