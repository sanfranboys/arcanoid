function useStorage() {
  function setStorage(data: boolean) {
    localStorage.isAuth = data
  }

  function getStorage() {
    return JSON.parse(localStorage.isAuth)
  }

  return [setStorage, getStorage]
}

export default useStorage
