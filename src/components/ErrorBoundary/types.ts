import { ReactNode, ErrorInfo } from 'react'

export interface ErrorBoundaryProps {
  children: ReactNode
}

export interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}
