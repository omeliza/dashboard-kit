import { Component, ErrorInfo, ReactNode } from 'react';

import ErrorFallback from 'pages/Error/Error';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, errorInfo);
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false });
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorFallback resetErrorBoundary={this.resetErrorBoundary} />;
    }

    return children;
  }
}
