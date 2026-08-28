import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-5 text-center">
          <h1 className="mb-2 text-2xl font-bold text-heading">Something went wrong</h1>
          <p className="text-text">Please refresh the page or contact the developer</p>
          {process.env.NODE_ENV === "development" && this.state.error && (
            <details className="mt-4 whitespace-pre-wrap rounded-card bg-card p-3 text-left text-sm">
              <summary className="mb-2 cursor-pointer font-semibold">Error Details</summary>
              {this.state.error.toString()}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
