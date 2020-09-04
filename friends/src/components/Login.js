import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="ui container">
         <h3 className="ui dividing header">Login</h3>
        <div className="ui inverted segment">
          <form className="ui inverted form">
            <div className="two fields">
              <div className="field">
                <label>First Name</label>
                <input type="text" name="username" placeholder="Username" value={this.state.credentials.username}
            onChange={this.handleChange} />
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" value={this.state.credentials.password}
            onChange={this.handleChange} />
              </div>
            </div>
            
                <div className="ui submit button">Submit</div>
              
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
