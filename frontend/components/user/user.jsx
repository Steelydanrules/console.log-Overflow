import React from 'react';
import {UserQuestionsIndex} from '../question/UserQuestionsIndex'
import {UserAnswersIndex} from '../answer/UserAnswersIndex'

class User extends React.Component{
  constructor(props){
    super(props)

  }

  componentDidMount(){
    console.log(this.props)
    this.props.fetchUser(this.props.match.params.id)
  }

  render(){
    if (this.props.user === undefined){
      return(
        <div className="user-show">
          User does not exist :( please go to a valid URL
        </div>
      )
    } else{
    return(
      <div className="user-show">

        <div className="users-show-banner-container">
          <img src={window.usersHeader}
          id="users-show-banner" 
          style={{ width: "100vw" }}/>
          <img src={window.usersExchangeHeader} 
          onClick={event => window.location.href = '/'}
          id="log-exchange-link" 
          style={{ width: "230px", height: "60px" }}/>
        </div>


        <div className="profile-photo-and-info">
          <div className="left-side-user-show">
          <img src={this.props.user.profile_photo_url}
          id="users-show-prof-photo"
          />

          </div>  

          <ul className="user-info-show-page"
          style={{listStyle: "none", marginTop: "-10px"}}
          >
            <li>
              <h3>{this.props.user.username}</h3>
            </li>  
            <li style={{ fontSize: "12px" }}>
              {this.props.user.email}
            </li>  
          </ul>


          <div className="right-side-user-show">
            <div id="random-box-user-show">
              <br />
            </div>

          </div>

        </div>
          <div className="questions-and-answers-users-show">
            <hr />
            <div className="top-questions-user-show">
            <h3>Questions:</h3>
            <UserQuestionsIndex user={this.props.user} />
            </div>
            <div className="top-answers-user-show">
            <h3> Answers:</h3>
            <UserAnswersIndex user={this.props.user} />
            </div>
          </div>

      </div>

    )
    }


  }
}



export default User;