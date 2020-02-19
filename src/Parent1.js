import React, { Component } from "react";
import Child1 from "./Child1";

class Parent1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bandi",
      age: "21",
      input1: ""
    };
  }

  clickHandler = event => {
    this.setState({
      input1: "Gayathri"
    });
  };

  changeHandler = event => {
    this.setState({
      input1: event.target.value
    });
  };
  render() {
    const { name, age, input1 } = this.state;
    return (
      <React.Fragment>
        <Child1
          name1={name}
          age={age}
          clicked={this.clickHandler}
          inputText={input1}
          changeHandler={this.changeHandler}
        />
      </React.Fragment>
    );
  }
}

export default Parent1;
