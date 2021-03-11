export const BASE_URL = 'https://ya-praktikum.tech'
export const API_URL = `${BASE_URL}/api/v2`
export const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
export const root = window.document.getElementById('root')
export const isProd = process.env.NODE_ENV === 'production'
