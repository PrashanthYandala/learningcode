import React, { Component } from "react";
import axios from "axios";

class Axiosdemo extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      errormsg: "",
      status: "",
      msg: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        console.log(response);
        this.setState({
          msg: response.data.status
        });
      })

      .catch(error => {
        this.setState({
          errormsg: "Error while retriving data "
        });
      });
  }

  render() {
    const { posts, errormsg, status } = this.state;
    return (
      <React.Fragment>
        <div>
          <h2> Titles of posts {status}</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default Axiosdemo;
