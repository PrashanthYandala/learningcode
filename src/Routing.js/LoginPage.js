import React, { Component } from "react";

class LoginPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <form>
            <div>
              <label>Username</label>
              <input type="text" />
            </div>

            <div>
              <label>Password</label>
              <input type="text" />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginPage;
