import * as yup from 'yup'
import { phoneRegExp } from '@/constants'

export const RegistrationSchema = yup.object().shape({
  login: yup.string().required('Обязательное поле').min(3, 'Мининум 3 символа'),
  password: yup
    .string()
    .required('Обязательное поле')
    .min(3, 'Мининум 3 символа'),
  email: yup
    .string()
    .required('Обязательное поле')
    .email('Поле должно быть в формате email'),
  first_name: yup
    .string()
    .required('Обязательное поле')
    .min(3, 'Мининум 3 символа'),
  second_name: yup
    .string()
    .required('Обязательное поле')
    .min(3, 'Мининум 3 символа'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Неверный формат номера')
    .required('Обязательное поле')
    .min(11, 'Мининум 11 символа')
    .max(12, 'Максимум 12 символа'),
})
