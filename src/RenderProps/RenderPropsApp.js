import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import User from "./User";

class RenderPropsApp extends Component {
  render() {
    return (
      <React.Fragment>
        <ClickCounter />
        <HoverCounter />
        {/* <User name="prashanth"/> 
        <User name={ () => 'Prashanth' }  />
        <User name={ (isLoggedIn) => isLoggedIn? 'Prashanth': 'Guest' }  />
      */}
        <User render={isLoggedIn => (isLoggedIn ? "Prashanth" : "Guest")} />
      </React.Fragment>
    );
  }
}

export default RenderPropsApp;
