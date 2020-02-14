import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      user: "guest",
      loged: false,
      login: true,
      username: "",
      password: ""
    };
  }
  loginhandler = props => {
    this.setState({
      user: "prashanth",
      loged: true,
      login: false
    });
  };

  logouthandler = () => {
    this.setState({
      user: "guest",
      loged: false,
      login: true
    });
  };

  usernamehandler = event => {
    this.setState({
      username: event.target.value
    });
  };
  render() {
    return (
      <React.Fragment>
        <Child
          login={this.state.login}
          loged={this.state.loged}
          loginhandler={this.loginhandler}
          logouthandler={this.logouthandler}
          user={this.state.user}
          usernamehandler={this.usernamehandler}
          username={this.state.username}
        />
      </React.Fragment>
    );
  }
}
export default Parent;
