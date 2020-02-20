import React, { Component } from "react";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <React.Fragment>
        <h2 onMouseOver={incrementCount}>hover {count}</h2>
      </React.Fragment>
    );
  }
}

export default HoverCounter;
