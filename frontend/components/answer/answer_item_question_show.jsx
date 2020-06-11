import React from 'react'
import { Link } from 'react-router-dom';

export const AnswerItemInQuestionShow = (props) => {
  let { answer, answerId } = props;
  let thisUser


  

  props.answerers.forEach(user => {
    if (user.id === answer.answerer_id) thisUser = user 
  })

    if (props.currentUser !== undefined) {
    if (thisUser === undefined) thisUser = props.currentUser
    }


  return(
    <li className="answer-on-q-index">

      
    <body className="top-of-q-index"
    style={{fontSize: "15px" }}
    >
    <hr />
    {answer.body}
    </body>

    <body className="bottom-of-q-index">
      <text>answerer:</text>
      <br />
        <Link to={`/users/${thisUser.id}`}
          style={{ color: "#0077CC", fontSize: "12px" }}
        >
          <img src={thisUser.profile_photo_url}
            style={{ width: "19px", height: "28px" }}
            id="users-show-prof-photo"
          />
          {thisUser.username}
        </Link>

    </body>
  </li>
)}