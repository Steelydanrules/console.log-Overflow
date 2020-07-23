import React from 'react';
import { Link } from 'react-router-dom';

  const limitChars = (text, numOfChars) => {
    if (text.length < numOfChars) {
      return text
    } else {
      return text.slice(0, numOfChars) + "..."
    }
  }

  const figureOutKarma = (votesArr) => {
    let score = 0;
    votesArr.forEach(vote => {
      if (vote.like_or_dislike === "LIKE") {
        score += 1;
      } else {
        score -= 1;
      }
    })

    return score;
  }
  
export const ShowIndexItem = (props) =>{
  if (props.question.answer_ids === undefined) {
    return (
      <>
        
      </>
      )
  }

  return(
    <li key={props.question.id} className="index-question-list-item">


      <div className="question-item-info">

        <div className="votes-index-item-container">
        {figureOutKarma(props.question.votes)}
        <p style={{fontSize: "9px", marginTop: "-2px"}}>VOTES</p>
        </div>

        <div className="answers-index-item-container">
        {props.question.answer_ids.length}
        <p style={{fontSize: "9px", marginTop: "-2px"}}>ANSWERS</p>
        </div>

        <div className="views-index-item-container">
          {props.question.site_hits} 
          <p style={{ fontSize: "9px", marginTop: "-2px" }}>views</p>
        </div>
      </div>


      <div className="question-item-preview">
        <div className='preview-to-question-on-index'>
        <Link 
        to={`/questions/${props.question.id}`}
        style={{ color: "#0077CC", textDecoration: "none"}}
        >  
          {limitChars(props.question.title, 100)}</Link>
        <br /> 
          <p style={{ fontSize: "11px", marginTop: "-2px" }}>{limitChars(props.question.body, 195)}</p>
        </div>
        
        <div className="bottom-of-preview-question-index">
          <p className="asked-by-text">asked by:</p>
        <Link to={`/users/${props.question.user.id}`}
          style={{ color: "#0077CC" }}
          >
        <img src={props.question.user.profile_photo_url}
          style={{ width: "19px", height: "28px" }}
          id="users-show-prof-photo"
        />  
        {props.question.user.username}  
        </Link>

        </div>
      </div>

    </li>

  )

}