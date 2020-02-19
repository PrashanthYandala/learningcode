import React from "react";

const Child1 = props => {
  return (
    <React.Fragment>
      <div>
        <h2>
          Welcome {props.inputText}. Is your age {props.age}?{" "}
        </h2>
        <button onClick={props.clicked}>Click</button>
      </div>

      <div>
        <input type="text" onChange={props.changeHandler} />
      </div>
      <h3>{props.inputText}</h3>
    </React.Fragment>
  );
};
export default Child1;
