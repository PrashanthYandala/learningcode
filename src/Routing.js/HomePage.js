import React, { Component } from "react";
import First from "./First";
import Second from "./Second";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Welcome</h2>
        <First />
        <Second />
      </React.Fragment>
    );
  }
}

export default HomePage;
