import * as yup from 'yup'

const authSchema = yup.object().shape({
  login: yup.string().required('Обязательное поле').min(3, 'Мининум 3 символа'),
  password: yup
    .string()
    .required('Обязательное поле')
    .min(3, 'Мининум 3 символа'),
})

export default authSchema
