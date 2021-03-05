type NotificationKey = 'notification'

const storage = (key: NotificationKey, value?: any) => {
  if (value) {
    localStorage[key] = JSON.stringify(value)
  }
  return localStorage.getItem(key) || false
}

export default storage
