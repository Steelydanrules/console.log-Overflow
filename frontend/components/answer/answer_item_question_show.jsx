import React from 'react'
import { Link } from 'react-router-dom';

export const AnswerItemInQuestionShow = (props) => {
  let { answer } = props;
  let thisUser

  props.answerers.forEach(user => {
    if (user.id === answer.answerer_id) thisUser = user 
  })

  return(
    <li className="answer-on-q-index">
      
    <body className="top-of-q-index">
    <hr />
    {answer.body}
    </body>

    <body className="bottom-of-q-index">
        <Link to={`/users/${thisUser.id}`}>
          <img src={thisUser.profile_photo_url}
            style={{ width: "46px", height: "69px" }}
            id="users-show-prof-photo"
          />
          {thisUser.username}
        </Link>

    </body>
  </li>
)}