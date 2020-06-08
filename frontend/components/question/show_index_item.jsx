import React from 'react';
import { Link } from 'react-router-dom';

export const ShowIndexItem = (props) =>{

  const limitBodyTextShown = () => {
    if (props.question.body.length < 195){
      return props.question.body
    } else {
      return props.question.body.slice(0, 195) + "..."
    }
  }

  return(
    <li key={props.question.id} className="index-question-list-item">
      <div className="question-item-info">

        <div className="votes-index-item-container">
        VOTES{/* {props.question.site_hits} */}
        <p style={{fontSize: "9px", marginTop: "-2px"}}>Fill IN</p>
        </div>

        <div className="answers-index-item-container">
        NUM{/* {props.question.answers} */}
        <p style={{fontSize: "9px", marginTop: "-2px"}}>FILL IN</p>
        </div>

        <div className="views-index-item-container">
          {props.question.site_hits} 
          <p style={{ fontSize: "9px", marginTop: "-2px" }}>views</p>
        </div>
      </div>

      <div className="question-item-preview">
        <div className='preview-to-question-on-index'>
        <Link to={`/questions/${props.question.id}`}>{props.question.title}</Link>
        <br /> 
          <p style={{ fontSize: "15px", marginTop: "-2px" }}>{limitBodyTextShown()}</p>
        </div>
        <div className="bottom-of-preview-question-index">
        
        <Link to={`/users/${props.question.user.id}`}>
        <img src={props.question.user.profile_photo_url}
          style={{ width: "46px", height: "69px" }}
          id="users-show-prof-photo"
        />  
        {props.question.user.username}  
        </Link>

        </div>

      </div>


    </li>

  )

}