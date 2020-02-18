import React, { Component } from "react";
import Child from "./Child";

class Refsdata extends Component {
  constructor() {
    super();
    this.refinput = React.createRef();
    this.state = {
      text: ""
    };
  }

  componentDidMount() {
    this.refinput.current.focus();
  }

  typeHandler = () => {
    this.setState({
      text: this.refinput.current.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <input type="text" ref={this.refinput} />
        <h2>{this.state.text} </h2>

        <button onClick={this.typeHandler}>click</button>
        <Child text={this.state.text} />
      </React.Fragment>
    );
  }
}

export default Refsdata;
