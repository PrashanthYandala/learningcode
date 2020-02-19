import React, { Component } from "react";
import axios from "axios";

class AxiosPostdemo extends Component {
  constructor() {
    super();
    this.state = {};
  }
  changeHandler = e => {
    this.setState({
      [e.target.msg]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    axios
      .post("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        console.log(response);
        this.setState({
          msg: response.data.status
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { posts, errormsg, status } = this.state;
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.submitHandler}>
            <h2> Titles of posts {status}</h2>
            <input type="status" value={status} onChange={this.changeHandler} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AxiosPostdemo;
