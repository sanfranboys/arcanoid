const storege = (data?: boolean) => {
  if (data === true || data === false) {
    localStorage.isAuth = data
    return ''
  }
  return JSON.parse(localStorage.isAuth)
}
export default storege
