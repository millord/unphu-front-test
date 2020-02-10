import React from "react";

import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "test@gmail.com",
      password: "123456",
      redirect: false
    };
  }

  handleChange = e => {
    console.log(e);
  };
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
  };

  render() {
    const LoginForm = () => {
      return (
        <form>
          <div className="form-group">
            <label className="text-muted">Email</label>
            <input
              onChange={this.handleChange("email")}
              type="email"
              className="form-control"
              value={this.email}
              required
            />
          </div>
          <div className="form-group">
            <label className="text-muted">Password</label>
            <input
              onChange={this.handleChange("password")}
              type="password"
              className="form-control"
              value={this.password}
              required
            />
          </div>
          {this.renderRedirect()}
          <button onClick={this.setRedirect} className="btn btn-primary">
            Submit
          </button>
        </form>
      );
    };
    return (
      <div className="container">
        <h4>Please Login</h4>
        {LoginForm()}
      </div>
    );
  }
}

export default Login;
