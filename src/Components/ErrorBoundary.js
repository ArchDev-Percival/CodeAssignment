import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error(
      "The following error was caught by the Error Boundary: ",
      error,
      info
    );
    this.state.error = (error, info)
  }
  render() {
    if (this.state.hasError) {
      return <div>
          <p>{this.state.error[0]}</p>
      </div>
    }
    return this.props.children;
  }
}
