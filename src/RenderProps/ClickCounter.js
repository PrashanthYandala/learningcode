import React, { Component } from "react";

class ClickCounter extends Component {
  render() {
    {
      /* const { count } = this.state; */
    }

    const { count, incrementCount } = this.props;
    return <button onClick={incrementHandler}> Clicked {count} times </button>;
  }
}

export default ClickCounter;
