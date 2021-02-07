import React, { Component, ErrorInfo } from 'react'
import { ErrorBoundaryProps, ErrorBoundaryState } from './types'

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  public static getDerivedStateFromError(
    error: Error,
    errorInfo: ErrorInfo
  ): ErrorBoundaryState {
    return {
      hasError: true,
      error,
      errorInfo,
    }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    })
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    const { hasError, error, errorInfo } = this.state
    const { children } = this.props
    if (hasError) {
      return (
        <h1>
          Sorry.. there was an
          <p>{error && error.toString()}</p>
          <p>{errorInfo && errorInfo.componentStack}</p>
        </h1>
      ) // Тут потом отрисовать страницу ошибки
    }

    return children
  }
}

export default ErrorBoundary
