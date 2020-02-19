import React, { Component } from "react";

import ComponentC from "./ComponentC";
import { UserProvider } from "./userContext";

class Appp extends Component {
  render() {
    return (
      <UserProvider valu e="Prashanth">
        <ComponentC />
      </UserProvider>
    );
  }
}

export default Appp;
