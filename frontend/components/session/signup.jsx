import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password:""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
  }

  handleChange(type){
    return(e) => (this.setState({[type]: e.target.value}))
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.createNewUser(this.state)) {
      this.setState({
        username: "",
        email: "",
        password: ""
      });
   } else {
    this.renderErrors()
   } 
  }

  renderErrors() {
    return (
      <div>
        {this.props.errors.map((error, i) => (
          <p className='errors' key={`error-${i}`}>
            {error}
          </p>
        ))}
      </div>
    );
  }

  render(){
    return(
      <div className="session-form-padding-signup">
        <div className='left-of-signup'>
          <ul className='left-of-signup-list' style={ { listStyle: "none"} }> 
          <li>
          <h3>Join the console.log Overflow Community</h3>
          </li>
          <li>
              <b>&#9785;</b>  Are you stuck on code? Unhappy with your product?
          </li>
          <li>
              <b>&#9743;</b>   Can't phone a friend?
          </li>
          <li>
              <b>&#9749;</b>  The community of JS experts will help you log ANYTHING to the console ANYWHERE
          </li>
          <li>
              <b>&#9728;</b>   Build cool things and retire to Florida
          </li>
          </ul>
          <br />

        </div>
        <div className="right-of-signup">
          <img src="assets/icon.svg" alt="cool-logo" height="35" width="35" />
          <br />
          <div className="session-form">
            <form onSubmit={this.handleSubmit}>
              {this.renderErrors()}
            <label>
                Display Name:
              <br />
              <input type="text" value={this.state.username} onChange={this.handleChange("username")} />
            </label>
            <br />
            <br />
            <label>
              Email:
              <br />
              <input type="text" value={this.state.email} onChange={this.handleChange("email")} />
            </label>
            <br />
            <br />
            <label>
              Password:
              <br />
              <input type="password" value={this.state.password} onChange={this.handleChange("password")} />
              <br />
              <small className="subtext">Password must be at least 6 characters</small>
            </label>
            <br />
            <br />
            <button onClick={this.handleSubmit}>Sign Up</button>
            </form>
          </div>
          <br />
          <p>Already have an account?  <Link to='/login'>Login!</Link></p>
          <p>Are you an employer? <a href="https://www.linkedin.com/in/karlkonetsky/">View this linkedIn</a></p>
          <br />
          <a href="https://github.com/Steelydanrules">or this GitHub</a>
        </div>
      </div>
    )

  }

}

export default Signup;