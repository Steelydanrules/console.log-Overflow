import React from 'react'
import { Link } from 'react-router-dom';

export const AnswerItemInQuestionShow = (props) => {
  let { answer, answerId, currentUser } = props;
  let thisUser
  let likers = [];
  let karma = 0;
  let sent = 0
  let votedAlready = false;


  const handleDelete = () => {
    props.deleteAnswer(answer.id)

  }

  const upVote = () => {
    let toSend = { like_or_dislike: "LIKE", answer_id: answer.id };
    props.postAnswerVote(toSend);
    props.fetchAnswerVotestoQuestion(props.questionId);
    figureOutNextKarma();
  }

  const downVote = () => {
    let toSend = { like_or_dislike: "DISLIKE", answer_id: answer.id };
    props.postAnswerVote(toSend);
    props.fetchAnswerVotestoQuestion(props.questionId);
    figureOutNextKarma();
  }



  const figureOutKarma = () => {
    if (props === undefined) return;
    let counted = [];
    for (let i = 0; i < props.answerVotes.length; i++) {
      let vote = props.answerVotes[i];
      debugger
      if (vote.like_or_dislike === "LIKE" && vote.answer_id === props.answer.id) {
        likers.push(vote.liker_id)
        karma += 1
      } else if (vote.like_or_dislike === "DISLIKE" && vote.answer_id === props.answer.id) {
        likers.push(vote.liker_id)
        karma -= 1;
      }
    };
  }
  figureOutKarma();


  const figureOutNextKarma = () => {
    let counted = [];
    props.answerVotes.forEach(vote => {
      if (counted.indexOf(vote.liker_id) === -1) {
        if (vote.like_or_dislike === "LIKE") {
          karma += 1;
        } else {
          karma -= 1;
        }
        counted.push(vote.liker_id);
      };

    })

    if (sent === 0) {
      sent += 1
      props.fetchAnswerVotestoQuestion(props.questionId);
      figureOutNextKarma();
    } else if (sent === 1) {
      sent += 1;
    } else {
      sent = 0;
    }

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


  if (props === undefined) {
    return
  } else {

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

        <h3>{karma}</h3>

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
}