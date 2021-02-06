import errorTexts from '../data'
import { ErrorData } from '../types'

const getErrorTexts = (errorType: number): ErrorData => {
  if (errorTexts[errorType]) return errorTexts[errorType]
  return {
    title: 'Произошла неизвестная ошибка',
    description: 'Мы сами не знаем, что происходит, бегите!',
  }
}

export default getErrorTexts
