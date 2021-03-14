type NotificationKey = 'notification'

const getFromLocalStorage = (key: NotificationKey, value?: any) => {
  if (value) {
    localStorage[key] = JSON.stringify(value)
  }
  return localStorage.getItem(key) || false
}

export default getFromLocalStorage
