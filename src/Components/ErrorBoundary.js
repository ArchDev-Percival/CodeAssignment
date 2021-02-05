import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
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
  }
  render() {
    if (this.state.hasError) {
      return <div>This is a placholder for Error Screen</div>;
    }
    return this.props.children;
  }
}
