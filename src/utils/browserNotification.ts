import storage from './setLocalStorage'

const showNotification = (title: string, option: NotificationOptions): void => {
  const notification = new Notification(title, option)
  notification.onclose = () => storage('notification', 'true')
}

const browserNotification = (title: string, option: NotificationOptions) => {
  if (Notification.permission === 'granted') {
    if (!JSON.parse(storage('notification'))) {
      showNotification(title, option)
    }
  } else if (Notification.permission === 'default') {
    Notification.requestPermission()
      .then((permission) => {
        if (permission === 'granted') {
          storage('notification', 'true')
          showNotification(title, option)
        } else {
          storage('notification', 'false')
        }
      })
      .catch((error) => {
        throw new Error(error)
      })
  }
}
export default browserNotification
