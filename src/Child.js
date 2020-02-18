import React from "react";

const Child = props => {
  return (
    <React.Fragment>
      <h2>
        Welcome {props.login && props.user}
        {props.loged && props.username}
      </h2>
      <form>
        <div>
          <h2>Hello MR.{props.text}</h2>
          <input
            placeholder="username"
            onChange={props.usernamehandler}
            value={props.name}
          />
        </div>
        <div>
          <input
            placeholder="password"
            onChange={props.password}
            value={props.pass}
          />
        </div>
      </form>

      {props.login && <button onClick={props.loginhandler}>Login</button>}

      {props.loged && <button onClick={props.logouthandler}>Logout</button>}
    </React.Fragment>
  );
};
export default Child;
