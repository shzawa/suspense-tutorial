import { Component, FC, ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode
  fallback: FC<{ error: Error }>
}

type ErrorBoundaryState = {
  error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = { error: null }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    const { error } = this.state
    const { children, fallback } = this.props

    if (error) return fallback({ error })
    return children
  }
}
