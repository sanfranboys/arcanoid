import { notification } from 'antd'
import { NotificationProps } from './types'
import 'antd/lib/notification/style/css'

export const NotificationWindow = ({
  type = 'warning',
  description,
}: NotificationProps) => {
  let title
  switch (type) {
    case 'warning':
      title = 'Предупрежддение!'
      break
    case 'error':
      title = 'Ошибка'
      break
    case 'success':
      title = 'Успех'
      break
    default:
      title = 'Предупреждение!'
      break
  }
  return notification?.[type]({
    message: title,
    description,
    duration: 2,
    onClose: () => notification.destroy(),
  })
}
