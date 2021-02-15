import * as yup from 'yup'


export const startGameSchema = yup.object().shape({
  nickname: yup.string().required('Обязательное поле').min(3, 'Мининум 3 символа'),
})
