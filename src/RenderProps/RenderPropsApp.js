import React, { Component } from "react";
import ClickCounter from "./ClickCounter";

class RenderPropsApp extends Component {
  render() {
    return (
      <React.Fragment>
        <ClickCounter />
      </React.Fragment>
    );
  }
}

export default RenderPropsApp;
