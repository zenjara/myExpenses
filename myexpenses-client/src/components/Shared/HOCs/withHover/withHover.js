import React, { Component } from 'react';

function withHover(WrappedComponent) {
  class WithHover extends Component {
    constructor(props) {
      super(props);

      this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
      this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
      this.state = { isHovered: false };
    }

    handleOnMouseEnter() {
      this.setState({ isHovered: true });
    }

    handleOnMouseLeave() {
      this.setState({ isHovered: false });
    }

    render() {
      return (
        <div
          onMouseEnter={this.handleOnMouseEnter}
          onMouseLeave={this.handleOnMouseLeave}
        >
          <WrappedComponent isHovered={this.state.isHovered} {...this.props} />
        </div>
      );
    }
  }

  return WithHover;
}

export default withHover;
