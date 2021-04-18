export const BASE_URL = 'https://ya-praktikum.tech'
export const OUR_URL = ''
export const API_URL = `${BASE_URL}/api/v2`
export const PREFIX_URL = '/api/v3'
export const API_OUR = `${OUR_URL}${PREFIX_URL}`
export const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
export const root = window.document.getElementById('root')
export const isProd = process.env.NODE_ENV === 'production'
export const OAuthRedirecUrl =
  'https://oauth.yandex.ru/authorize?response_type=code&client_id='
export const APP_URL = `${
  isProd
    ? 'https://sanfranoid.herokuapp.com/'
    : 'https://local.ya-praktikum.tech:5000/'
}`
