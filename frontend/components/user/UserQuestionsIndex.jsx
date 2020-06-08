import React from 'react';
import { Link } from 'react-router-dom';



const UserQuestionsIndex = (props) => {
  // debugger
  // let testThis = Object.values(this.props.fetchQuestions())
  // debugger


  console.log(props)

  if (props.user.questions === undefined || props.user.questions.length === 0){
    // debugger
  return(
    <div className="user-questions-index-blank" style={{ fontStyle: 'italic' }}>
      {props.user.username} has not asked any questions.
    </div>
  )} else {
    // debugger
    return(
      <ul className="user-questions-index" style={{ listStyle: "none", fontSize: '12px' }}>
        {props.user.questions.map(question => (
          <li>
            <Link to={`/questions/${question.id}`}>{question.title}</Link>
          </li>
        ))}
      </ul>
    )
  }
}

export default UserQuestionsIndex;