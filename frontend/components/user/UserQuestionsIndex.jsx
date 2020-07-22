import React from 'react';
import { Link } from 'react-router-dom';

const limitChars = (text, numOfChars) => {
  if (text.length < numOfChars) {
    return text
  } else {
    return text.slice(0, numOfChars) + "..."
  }
}

const UserQuestionsIndex = (props) => {
  if (props.user.questions === undefined || props.user.questions.length === 0){
  return(
    <div className="user-questions-index-blank" style={{ fontStyle: 'italic' }}>
      {props.user.username} has not asked any questions.
    </div>
  )} else {
    return(
      <ul className="user-questions-index" style={{ listStyle: "none", fontSize: '12px' }}>
        {props.user.questions.map(question => (
          <li>
            <Link to={`/questions/${question.id}`}>{limitChars(question.title, 100)}</Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default UserQuestionsIndex;