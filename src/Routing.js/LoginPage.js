import React, { Component } from "react";
import data from "./data"; 

class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state={
      username:"",
      password:''
    }
    this.inputRef= React.createRef();
  }

  componentDidMount(){
    this.inputRef.current.focus()
    console.log(this.inputRef)
  }

  loginHandler =(e)=>{
  e.preventDefault();
   this.setState({
     username: this.inputRef.current.value,
     password: this.inputRef.current.value,
     
    })
  }

  render() {
    console.log({username})
    const credentials=data.users;
    const {username,password}=this.state;
    return (
      <React.Fragment>
        <div>
       
          <form onSubmit={this.loginHandler}>
            <div>
              <label>Username</label>
              <input type="text" ref={this.inputRef}/>
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
