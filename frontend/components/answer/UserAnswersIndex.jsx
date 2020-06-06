import React from 'react';
import { Link } from 'react-router-dom';
export const UserAnswersIndex = (props) => {
  if (props.user.answers === undefined || props.user.answers.length === 0) {
    return (
      <div className="user-answers-index-blank" style={{ fontStyle: 'italic' }}>
        User has not asked any answers.
      </div>
    )
  } else {
    return (
      <ul className="user-answers-index" style={{ listStyle: none, fontSize: '12px' }}>
        {this.props.user.answers.each.map(answer => (
          <li>
            <Link to={`/answers/${answer.id}`}>{answer.title}</Link>
          </li>
        ))}
      </ul>
    )
  }
}