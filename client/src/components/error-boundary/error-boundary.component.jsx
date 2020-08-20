import React, { Component } from "react";

import "./error-boundary.styles.scss";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    return this.state.hasErrored ? (
      <div className="error-image-overlay">
        <div
          className="error-image-container"
          style={{ backgroundImage: "url('https://i.imgur.com/A040Lxr.png')" }}
        ></div>
            <div className="error-image-text">
              Sorry, this page is lost in space
            </div>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
