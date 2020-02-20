import React, { Component } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import User from "./User";
import Counter from "./Counter";

class RenderPropsApp extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <ClickCounter />
        <HoverCounter />
        <User name="prashanth"/> 
        <User name={ () => 'Prashanth' }  />
        <User name={ (isLoggedIn) => isLoggedIn? 'Prashanth': 'Guest' }  />
      
        <User render={isLoggedIn => (isLoggedIn ? "Prashanth" : "Guest")} />
      */}

        <Counter
          render={(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        />
        <Counter
          render={(count, incrementCount) => (
            <HoverCounter count={count} incrementCount={incrementCount} />
          )}
        />
      </React.Fragment>
    );
  }
}

export default RenderPropsApp;
