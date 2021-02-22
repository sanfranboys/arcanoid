export function setStorage(data: boolean) {
  localStorage.isAuth = data
}

export function getStorage() {
  return JSON.parse(localStorage.isAuth)
}
