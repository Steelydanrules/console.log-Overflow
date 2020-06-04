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

  }

  render(){
    if(this.props.currentUser) {
      return(
          <div className="nav-bar-logged-in">
          <Link to="/">
          <img 
          src={window.titlenotscrolled} 
          alt="not scolled logo" 
          id="top-logo" 
              onMouseOver={e => (e.currentTarget.src =window.titlescrolled)}
              onMouseLeave={e => (e.currentTarget.src = window.titlenotscrolled)}
          />
          </Link>
          <p>{this.props.currentUser.username}</p>
          <button onClick={() => this.props.logout()}>Log Out</button>
        </div>
      )
    } else {
      return(
        <div className="nav-bar-logged-out">
          <Link to="/">
          <img
          id="top-logo" 
          src={window.titlenotscrolled} 
          alt="not scolled logo" 
              onMouseOver={e => (e.currentTarget.src = window.titlescrolled)}
              onMouseLeave={e => (e.currentTarget.src = window.titlenotscrolled)}
          />
          </Link>
          <div id="signup-signin">
          <Link to='/login'>
            <button id="login-button">
                Log In
            </button>
          </Link>
           
          <Link to='/signup'>
            <button id="signup-button">
              Sign Up
            </button>
          </Link>
          
          </div>
        </div> 
      )
    }
  }
}

export default NavBar;