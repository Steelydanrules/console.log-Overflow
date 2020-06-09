import React from 'react';
import { Link } from 'react-router-dom';
import { AnswerItemInQuestionShow } from '../answer/answer_item_question_show'


class QuestionsShow extends React.Component {
  constructor(props) {
    // debugger
    super(props);
  }

  specificUser(targetId){
    this.props.question.users_who_answered_question.forEach(userObj => {
      if (userObj.id = targetId) {
        return userObj
      }
    })
  }

  render() {
    this.props
    if (!this.props.question) {
      // this.props.addViewQuestion(this.props.match.params.id)
      return (
        <div>
          <br />
          <br />
          <br />
          LOADING
        </div>
      )
    } else {
      const date = this.props.created_at
      const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
      const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date)
      return (
        <div className="question-show-container">
          <div className="question-show-left">

            <Link to="/questions">
              <button className="left-nav-home-button">
                Home
              </button>
            </Link>

          </div>

          <div className="question-show-right">
            <div className="questions-show-header">
              <h3>{this.props.question.title}</h3>
              <Link to={'/questions/new'}>
              <button
                className="ask-a-question-button-show"
                >Ask Question</button>
              </Link>


            </div>
            <p className="ask-a-question-timestamp-show">
              <text><b>Asked : </b>{` ${month}/${day}/${year}`}</text>
              <text><b>Views : </b>{this.props.question.site_hits}</text>
              </p>

            <div className="question-show-body">
            <hr />
            <p>{this.props.question.body}</p>
            
            </div>
            <ul className="list-of-answers-to-this-question" 
            style={{listStyle : "none"}}
            >
            {this.props.question.answers.map(answer => (
              <AnswerItemInQuestionShow
              className="answer-on-q-index"
              answer={answer}
              answerers={this.props.question.users_who_answered_question}
              />
              ))}

            </ul>

          </div>
        </div>
      )
    }
  }
}




export default QuestionsShow;