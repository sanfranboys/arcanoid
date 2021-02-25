export type ErrorPageProps = {
  errorType?: number
}

export type ErrorData = {
  title?: string
  description: string
  hasLink?: boolean
}

export type ErrorProps = Omit<ErrorData, 'title'> & ErrorPageProps
