export type ErrorPageProps = {
  errorType: number
}

export type ErrorData = {
  title: string
  description: string
}

export type ErrorProps = Omit<ErrorData, 'title'> & {
  hasLink?: boolean
} & ErrorPageProps
