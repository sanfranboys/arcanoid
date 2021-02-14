import React, { Component, ErrorInfo } from 'react'
import { ErrorPage } from '@/pages/'
import { Layout } from '@/elements/'
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
  }

  public render() {
    const { hasError, error, errorInfo } = this.state
    const { children } = this.props
    if (hasError) {
      return (
        <Layout>
          <ErrorPage
            title={error && error.toString()}
            description={errorInfo && errorInfo.componentStack}
            haslink
          />
        </Layout>
      )
    }

    return children
  }
}

export default ErrorBoundary
