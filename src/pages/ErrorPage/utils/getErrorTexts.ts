import errorTexts from '../data'
import { ErrorData } from '../types'

const getErrorTexts = (errorType: number): ErrorData => {
  if (errorTexts[errorType]) return errorTexts[errorType]
  return errorTexts.default
}

export default getErrorTexts