import React from 'react';
import { Link } from 'react-router-dom';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.demoLogin = this.demoLogin.bind(this)
  }

  handleChange(type) {
    return (e) => (this.setState({ [type]: e.target.value }))
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
    this.setState({ username: "", email: "", password: "" })
  }

  demoLogin() {
    this.props.login(this.props.demoUser)
  }



  render() {
    return (
      <div className="session-form-padding-login">
        <img src="assets/icon.svg" alt="cool-logo" height="35" width="35" />
        <br />
        <div className="session-form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Display Name:
              <br />
            <input type="text" value={this.state.username} onChange={this.handleChange("username")} />
            </label>
            <br />
            <br />
            <label>
              Password:
              <br />
            <input type="password" value={this.state.password} onChange={this.handleChange("password")} />
            </label>
            <br />
            <br />
            <button onClick={this.handleSubmit}>Sign In</button>
            <br />
          </form>
            <button onClick={() => this.demoLogin()}>Demo Login</button>
        </div>
        <br />
        <p>Don't have an account?  <Link to='/signup'>Sign up!</Link></p>
        <p>Are you an employer? <a href="https://www.linkedin.com/in/karlkonetsky/">View this linkedIn</a></p>
        <br />
        <a href="https://github.com/Steelydanrules">or this GitHub</a>
      </div>
    )

  }

}

export default LogIn;