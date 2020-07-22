import React from 'react'
import { Link } from 'react-router-dom';

export const AnswerItemInQuestionShow = (props) => {
  debugger
  let { answer, answerId, currentUser } = props;
  let thisUser


  const handleDelete = () => {
    props.deleteAnswer(answerId)

  }

  const upVote = () => {
    let toSend = { like_or_dislike: "LIKE", answer_id: answerId };
    props.postAnswerVote(toSend);
    props.fetchAnswerVotes(answerId);
  }

  const downVote = () => {
    let toSend = { like_or_dislike: "DISLIKE", answer_id: answerId };
    props.postAnswerVote(toSend);
    props.fetchAnswerVotes(answerId);
  }



  const figureOutKarma = () => {
    if (props.votes.length === 0) return 0;
    let karma = 0;
    for (let i = 0; i < props.votes.length; i++) {
      let vote = props.votes[i];
      if (vote.like_or_dislike === "LIKE") {
        karma++
      } else {
        karma--;
      }
    }

    return karma;


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
    <div className="entire-answer"
    key={props.idx}
    >
      <hr />



    <li className="answer-on-q-index"
    key={props.idx}
    >

      <div className="answers">
        <i className="fas fa-sort-up fa-3x answer-votes-up"
        onClick={() => upVote()}
        />

        <h3>{figureOutKarma()}</h3>

        <i className="fas fa-sort-down fa-3x answer-votes-down"
        onClick={() => downVote()}
        />
      </div>

    <div className="top-of-q-index"
    style={{fontSize: "15px" }}
    >
          <p>{answer.body}</p>

      {shouldIDelete()}
      {/* <button onClick={() => handleDelete()}>Delete</button> */}

    </div>

    {/* <Link to={`/answers/${answerId}/edit`}>Edit</Link> */}

    <div className="answer-item-in-question">



      <div className="bottom-right">

          <p className="formerly-text">answerer:</p>
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
    </div>
  </li>
  </div>
)}