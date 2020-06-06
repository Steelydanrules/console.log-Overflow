import React from 'react';
import { Link } from 'react-router-dom';
export const UserQuestionsIndex = (props) => {
  if (props.user.questions === undefined || props.user.questions.length === 0){
  return(
    <div className="user-questions-index-blank" style={{ fontStyle: 'italic' }}>
      {props.user.username} has not asked any questions.
    </div>
  )} else {
    return(
      <ul className="user-questions-index" style={{ listStyle: none, fontSize: '12px' }}>
        {this.props.user.questions.each.map(question => (
          <li>
            <Link to={`/questions/${question.id}`}>{question.title}</Link>
          </li>
        ))}
      </ul>
    )
  }
}