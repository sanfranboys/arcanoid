import errorTexts from '../mock'
import { ErrorData } from '../types'

const getErrorTexts = (errorType: number | undefined): ErrorData => {
  if (errorType) {
    if (errorTexts[errorType]) {
      return errorTexts[errorType]
    }
  }
  return errorTexts.default
}

export default getErrorTexts
