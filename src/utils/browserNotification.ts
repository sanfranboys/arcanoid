import storage from './setLocalStorage'

const timeForPush = 8
const hourNow = new Date().getHours()
const minutesNow = new Date().getMinutes()
const dateNow = new Date().getDay()

type StorageState = {
  date: number
}

const showNotification = (title: string, option: NotificationOptions): void => {
  const notification = new Notification(title, option)
  notification.onshow = () => storage('notification', { date: dateNow })
}
const browserNotification = (title: string, option: NotificationOptions) => {
  const stateNotification: StorageState = JSON.parse(
    storage('notification') || '{ "date":0 }'
  )
  if (Notification.permission === 'granted') {
    if (hourNow >= timeForPush) {
      if (stateNotification.date !== dateNow) {
        showNotification(title, option)
      }
    } else {
      const wait = timeForPush - hourNow + (60 - minutesNow)
      setTimeout(() => {
        showNotification(title, option)
      }, wait)
    }
  } else if (Notification.permission === 'default') {
    Notification.requestPermission()
      .then((permission) => {
        if (permission === 'granted') {
          showNotification('Поздровляем !', {
            body: 'Вы подписались на утренние оповещения',
          })
        }
      })
      .catch((error) => {
        throw new Error(error)
      })
  }
}
export default browserNotification
