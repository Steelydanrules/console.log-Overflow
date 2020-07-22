import React from 'react'
import { Link } from 'react-router-dom';

export const AnswerItemInQuestionShow = (props) => {
  let { answer, answerId, currentUser } = props;
  let thisUser


  const handleDelete = () => {
    props.deleteAnswer(answerId)

  }

  const shouldIDelete = () => {
    if (props.currentUser === undefined) return;
    if (currentUser.id === answer.answerer_id) {
      return (
        <button onClick={() => handleDelete()}>Delete</button>
      )
    } else {
      return(
        <>
        </>
      )
    }
  }

  

  props.answerers.forEach(user => {
    if (user.id === answer.answerer_id) thisUser = user 
  })

    if (props.currentUser !== undefined) {
    if (thisUser === undefined) thisUser = props.currentUser
    }

  return(
    <div className="entire-answer">
      <hr />



    <li className="answer-on-q-index">

      <div className="answers">
        <i className="fas fa-sort-up fa-3x answer-votes-up" />

        <h3>   0</h3>

        <i className="fas fa-sort-down fa-3x answer-votes-down" />
      </div>

    <body className="top-of-q-index"
    style={{fontSize: "15px" }}
    >
          <p>{answer.body}</p>

      {shouldIDelete()}
      {/* <button onClick={() => handleDelete()}>Delete</button> */}

    </body>

    {/* <Link to={`/answers/${answerId}/edit`}>Edit</Link> */}

    <body className="answer-item-in-question">



      <div className="bottom-right">

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

      </div>
    </body>
  </li>
  </div>
)}