import { ErrorData } from './types'

const errorTexts: Record<number, ErrorData> = {
  404: {
    title: 'Данной страницы не существует',
    description: 'Убедитесь что адрес верный, или вернитесь на главную',
    hasLink: true,
  },
  500: {
    title: 'Внутренняя ошибка сервера',
    description:
      'Попробуйте зайти к нам позже, скорее всего ошибки уже не будет',
  },
  999: {
    title: 'Произошла неизвестная ошибка',
    description: 'Мы сами не знаем, что происходит, бегите!',
  },
}

export default errorTexts
