import { notification } from 'antd'
import { titleNotificationWindow } from '@/constants'
import { NotificationProps } from './types'
import 'antd/lib/notification/style/css'

const NotificationWindow = ({
  type = 'warning',
  description,
}: NotificationProps) =>
  notification?.[type]({
    message: titleNotificationWindow[type],
    description,
    duration: 2,
    onClose: () => notification.destroy(),
  })

export default NotificationWindow
