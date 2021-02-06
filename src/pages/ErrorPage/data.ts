import { ErrorData } from './types'

const errorTexts: Record<number, ErrorData> = {
  404: {
    title: 'Данной страницы не существует',
    description: 'Убедитесь что адрес верный, или вернитесь на главную',
  },
  500: {
    title: 'Внутренняя ошибка сервера',
    description:
      'Попробуйте зайти к нам позже, скорее всего ошибки уже не будет',
  },
}

export default errorTexts
