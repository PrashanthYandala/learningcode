import React, { Component } from "react";

class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      times: 0
    };
  }

  mouseHandler = event => {
    this.setState(prevState => {
      return { times: prevState.times + 1 };
    });
  };
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
