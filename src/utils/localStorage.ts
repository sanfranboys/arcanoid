export default function useStorage() {
  const storege = (data: string) => {
    if (!data) {
      return JSON.parse(localStorage.getItem('isAuth') || '')
    }
    localStorage.setItem('isAuth', JSON.stringify(data))
    return ''
  }
  const deleteStorage = () => {
    localStorage.removeItem(`isAuth`)
  }
  return [storege, deleteStorage]
}
