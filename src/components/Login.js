import React from "react";
import fire from "../config/Fire";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
  }

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  };

  signup = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Email</label>
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            value={this.state.email}
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
          />
        </div>
        <button onClick={this.login} className="ui button blue" type="submit">
          Login
        </button>
        <button onClick={this.signup} className="ui button green" type="submit">
          Signup
        </button>
      </form>
    );
  }
}

export default Login;
