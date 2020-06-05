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
    let cell = 420;

    {this.props.errors.forEach(er => cell += 50)}

    return(
      <div className="session-form-padding-signup">
        <div className="session-form-content">
          <div className='left-of-signup'>
            <h3>Join the console.log Overflow Community</h3>
            <div className='left-of-signup-grid'> 
              <div className="left-grid" id="1A">
                <img src={window.signUpWidget1} />
              </div>
              <div className="right-grid" id="1B">
                Get unstuck — ask a question
              </div>
              <div className="left-grid" id="2A">
                <img src={window.signUpWidget2} />
              </div>
              <div className="right-grid" id="2B">
                Vote on great questions/answers
              </div>
              <div className="left-grid" id="3A">
                <img src={window.signUpWidget3} />
              </div>
              <div className="right-grid" id="3B">
                Save some stuff
              </div>
              <div className="left-grid" id="4A">
                <img src={window.signUpWidget4} />
              </div>
              <div className="right-grid" id="4B">
                Get rewarded!
              </div>
            </div>
            <br />
            <p className="subtext" style={{ width: "350px"}}
            >Use the power of console.log Overflow inside your organization.
            Email a member of our team!
            </p>
          </div>

          <div className="right-of-signup">
            <img src={window.loginLogo} alt="cool-logo" height="35" width="35" />
            <br />
            <div className="session-form-signup" style={{ width: "300px", height: `${cell}px` }}>
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
              <small>This site is strictly for presentational purposes.  I 
                will not send you emails or solicitations of any type.  If you
                would rather use a demo account, click the 'demo' button 
                on the top of this page.
              </small>
              </form>
            </div>
            <br />
            <p>Already have an account?  <Link to='/#/login'>Login!</Link></p>
            <p>Are you an employer? <a href="https://www.linkedin.com/in/karlkonetsky/">View this linkedIn</a></p>
            <p><a href="https://github.com/Steelydanrules">or this GitHub</a></p>
          </div>
        </div>
      </div>
    )

  }

}

export default Signup;