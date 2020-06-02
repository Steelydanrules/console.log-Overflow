import React from 'react';
import { Link } from 'react-router-dom';
import SignUpContainer from '../session/signup_container'


class NavBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.currentUser) {
      return(
        <div>
          logged in!
        </div>
      )
    } else {
      return(
        <div>
          <Link to='/signup'>
            Log In
          </Link>
          
        </div> 
      )
    }
  }
}

export default NavBar;