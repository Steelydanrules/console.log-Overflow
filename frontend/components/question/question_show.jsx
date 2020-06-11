import React from 'react';
import { Link } from 'react-router-dom';
import { AnswerItemInQuestionShow } from '../answer/answer_item_question_show'
import AnswerCreateContainer from '../answer/answer_create_container'


class QuestionsShow extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.answerBox = this.answerBox.bind(this)
  }

  specificUser(targetId){
    this.props.question.users_who_answered_question.forEach(userObj => {
      if (userObj.id = targetId) {
        return userObj
      }
    })
  }

  componentDidMount(){
    this.props.fetchAnswers(this.props.match.params.id);
    this.props.fetchQuestion(this.props.match.params.id);
    
  }


  answerBox(){
    if (this.props.session) {
      return(
        <div>
      <AnswerCreateContainer 
            questionId={this.props.match.params.id}
      />
        </div>
      )
    } else {
      return(
        <div
        style={{marginLeft: "6%"}}>
          Please sign in to commment
        </div>
      )
    }



  }


  questionCount() {
    if (this.props.question.answer_ids.length === 0){
      return <h3>Be the first to answer</h3>
    } else if (this.props.question.answer_ids.length === 1){
      return <h3>1 Answer</h3>
    } else {
      return <h3>{this.props.question.answer_ids.length} Answers</h3>
    }
  }
  
  
  render() {
    if (!this.props.answers || (this.props.answers.length !== 0 && this.props.answers[0] === undefined && this.props.answers)) {
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
            <p style={{fontSize: "12px", marginRight: "20%"}}>{this.props.question.body}</p>
            
            <div className="bottom-of-question-show">
              <text>asked by:</text>
              <br />
              <Link to={`/users/${this.props.question.user.id}`}
                style={{ color: "#0077CC" }}
              >
                <img src={this.props.question.user.profile_photo_url}
                  style={{ width: "19px", height: "28px" }}
                  id="users-show-prof-photo"
                />
                {this.props.question.user.username}
              </Link>
              {/* <br />
              <text>questions asked:</text> {this.props.question.user.questions_asked.length}
                <text>questions answered:</text> {this.props.question.user.questions_answered.length} */}

            </div>

            {this.questionCount()}
            </div>


            <ul className="list-of-answers-to-this-question" 
            style={{listStyle : "none"}}
            >

              {this.props.answers.map(answer => (
              <AnswerItemInQuestionShow
              className="answer-on-q-index"
              answerId={answer.id}
              answerers={this.props.question.users_who_answered_question}
              answer={answer}
              currentUser={this.props.currentUser}
              />
              ))}

            </ul>
            
            {this.answerBox()}


          </div>
        </div>
      )
    }
  }
}




export default QuestionsShow;