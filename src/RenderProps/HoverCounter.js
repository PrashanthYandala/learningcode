import React, { Component } from "react";

class HoverCounter extends Component {
  render() {
    const { times } = this.state;
    return (
      <React.Fragment>
        <h2 onMouseOver={this.mouseHandler}>hover{times}</h2>
      </React.Fragment>
    );
  }
}

export default HoverCounter;
