import React, { Component, ErrorInfo } from 'react'
import { ErrorPage } from 'pages'
import { Layout } from 'elements/'
import { ErrorBoundaryProps, ErrorBoundaryState } from './types'

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
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

  public componentDidCatch() {
    this.setState({
      hasError: true,
    })
  }

  public render() {
    const { hasError } = this.state
    const { children } = this.props
    if (!hasError) {
      return children
    }
    return (
      <Layout>
        <ErrorPage />
      </Layout>
    )
  }
}

export default ErrorBoundary
