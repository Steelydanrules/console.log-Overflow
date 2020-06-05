import React from 'react';
import { Link } from 'react-router-dom';
// import defaultLogo  from '../images/titlenotscrolled.png'

// {window.blankLoveToCodeURL}
// {window.circleOrangeIcon} 
// {window.icon} 
// {window.titlenotscrolled} 
// {window.titlescrolled} 

class NavBar extends React.Component{
  constructor(props){
    super(props);

    this.state = this.props;

    this.logOutOrInBar = this.logOutOrInBar.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({searchBar: e.currentTarget.value})
  } 

  logOutOrInBar(){
    if (this.props.currentUser) {
      return(
      <div className='logout-container'>
        <p>hey, {this.props.currentUser.username}</p>
        <button id="logout-button"
        onClick={() => this.props.logout()}>
          Log Out</button>
      </div>
      )
    } else {
      return(
        <div id="signup-signin">

            <button id="signup-button" onClick={
              () => this.props.loginDemoUser()}>
              Demo
            </button>

          <Link to='/login'>
            <button id="login-button">
              Log in
            </button>
          </Link>

          <Link to='/signup'>
            <button id="signup-button">
              Sign up
            </button>
          </Link>
        </div>
      )
    }
  }

  render(){
      return(
          <div className="nav-bar">
          <img 
          onClick={event => window.location.href = '/'}
          src={window.titlenotscrolled} 
          alt="not scolled logo" 
          id="top-logo" 
              onMouseOver={e => (e.currentTarget.src =window.titlescrolled)}
              onMouseLeave={e => (e.currentTarget.src = window.titlenotscrolled)}
          />


          <button className="github-nav" onClick={() => window.location.href="https://github.com/Steelydanrules"}>GitHub</button>
          <button className="linked-in-nav" onClick={() => window.location.href="https://www.linkedin.com/in/karlkonetsky/"}>LinkedIn</button>



          <form className="search-bar-nav">
            <input type="text" 
            onChange={this.handleChange}
            placeholder='&#128269; Search...' 
            style={{width: "500px", height: "30px"}} 
            value={this.state.searchBar} />
          </form>

          {this.logOutOrInBar()}
        </div>
      )
    }
}

export default NavBar;