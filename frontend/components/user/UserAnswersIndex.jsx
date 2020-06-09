import React from 'react';
import { Link } from 'react-router-dom';


const limitText = (text) => {
  if (text.length < 100) {
    return text
  } else {
    return text.slice(0, 100) + "..."
  }
}

const UserAnswersIndex = (props) => {

  
  // debugger
  // let testThis = Object.values(this.props.fetchQuestions())
  // debugger
  console.log(props)
  if (props.user.questions_answered === undefined || props.user.questions_answered.length === 0) {
    // debugger
    return (
      <div className="user-answers-index-blank" style={{ fontStyle: 'italic' }}>
        {props.user.username} has not answered any Questions.
      </div>
    )
  } else {
    // debugger
    return (
      <ul className="user-answers-index" style={{ listStyle: "none", fontSize: '12px' }}>
        {props.user.questions_answered.map(answer => (
          <li>
            <Link to={`/questions/${answer.question_id}`}>{limitText(answer.body)}</Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default UserAnswersIndex;