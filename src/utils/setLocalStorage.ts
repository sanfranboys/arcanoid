type NotificationKey = 'notification'

const storage = (key: NotificationKey, value?: string) => {
  if (value) {
    localStorage[key] = value
  }
  return localStorage.getItem(key) || ''
}

export default storage
