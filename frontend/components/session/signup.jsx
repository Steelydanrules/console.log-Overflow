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
  }
  
    leftOfSignup(){
      return(
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
          <p className="subtext" style={{ width: "350px" }}
          >Use the power of console.log Overflow inside your organization.
            Email a member of our team!
              </p>
        </div>
      )
    }
  
  componentDidMount() {
    this.props.clearSessionErrors()
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
   } 
  }

  handleSpecificError(errorTitle, inputField){
    if (document.getElementById(inputField) === null) {
      return
    } else if (this.props.errors.indexOf(errorTitle) !== -1) {
      let targetedInput = document.getElementById(inputField)
      targetedInput.className = "signup-input-yes-errors"
      return(
      <div className="error">{errorTitle}</div>
      ) 
    } else {
      document.getElementById(inputField).className = "signup-input-no-errors"
      return(
        < br/>
      )
    }
  }


  render(){
    let signupHeight = 420;

    {this.props.errors.forEach(er => signupHeight += 12)}

    return(
      <div className="session-form-padding-signup">
        <div className="session-form-content">
          {this.leftOfSignup()}

          <div className="right-of-signup">
            <img src={window.loginLogo} alt="cool-logo" />
            <br />
            <div className="session-form-signup" style={{ width: "300px", height: `${signupHeight}px` }}>
              <form onSubmit={this.handleSubmit}>
              <label>
                     Display Name:
                <br />

                <input type="text"
                className="signup-input-no-errors"
                id="signup-username-input" 
                value={this.state.username} 
                onChange={this.handleChange("username")} />

              </label>
                {this.handleSpecificError("Username can't be blank","signup-username-input")}

              <br />
              <label>
                   Email:
                <br />

                <input type="text"
                className="signup-input-no-errors"
                id="email-input" 
                value={this.state.email} 
                onChange={this.handleChange("email")} />

              </label>
              <br />
              <br />
              <label>
                   Password:
                <br />

                <input type="password"
                className="signup-input-no-errors"
                id="signup-email-input" 
                value={this.state.password} 
                onChange={this.handleChange("password")} />

              </label>
                  {this.handleSpecificError("Password is too short (minimum is 6 characters)","signup-email-input")}

                <small className="subtext">Password must be at least 6 characters</small>
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