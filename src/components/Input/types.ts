import { FieldError } from 'react-hook-form'

export type OwnProps = {
  error?: FieldError | undefined
  register?: any
  label?: string
}
