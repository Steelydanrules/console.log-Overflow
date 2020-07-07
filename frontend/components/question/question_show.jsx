import React from 'react';
import { Link } from 'react-router-dom';
import { AnswerItemInQuestionShow } from '../answer/answer_item_question_show'
import AnswerCreateContainer from '../answer/answer_create_container'
import { withRouter } from 'react-router-dom';

class QuestionsShow extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    debugger
    // this.state = this.props;
    this.answerBox = this.answerBox.bind(this);
    this.possibleAnswer = this.possibleAnswer.bind(this);
    this.loaded = false;
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
    this.props.fetchVotes(this.props.match.params.id);
    this.loaded = true;
  }

  figureOutKarma(){
    if (this.loaded === false) return;
    debugger
    let score = 0;
    this.props.votes.forEach(vote => {
    // this.state.votes.forEach(vote => {
      if (vote.like_or_dislike === "LIKE") {
        score += 1;
      } else {
        score -= 1;
      }
    })
    return score;
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

  possibleAnswer(answer, idx) {
    if (answer === undefined) {
      return(
        <>
        </>
      )
      } else {
        return(
        <AnswerItemInQuestionShow
        key={idx}
          className="answer-on-q-index"
          answerId={answer.id}
          answerers={this.props.question.users_who_answered_question}
          answer={answer}
          currentUser={this.props.currentUser}
          patchAnswer={this.props.patchAnswer}
          deleteAnswer={this.props.deleteAnswer}
          />
          )
      }
    }

  upVote(){
    let toSend = {like_or_dislike: "LIKE", question_id: this.props.match.params.id};
    debugger
    this.props.postVote(toSend);
    this.props.fetchVotes(this.props.match.params.id);
    this.forceUpdate();
  }

  downVote(){
    let toSend = {like_or_dislike: "DISLIKE", question_id: this.props.match.params.id};
    debugger
    this.props.postVote(toSend);
    this.props.fetchVotes(this.props.match.params.id);
    this.forceUpdate();
  }

  
  render() {
    if (this.loaded === false || this.props.question === undefined) {
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

              <div className="votes">
              <i className="fas fa-sort-up fa-3x" 
              onClick = {() => this.upVote()}
              />

              <h3>{this.figureOutKarma()}</h3>

              <i className="fas fa-sort-down fa-3x" 
              onClick={() => this.downVote()}
              />
              </div>

              <h3 id="question-title">{this.props.question.title}</h3>
              <Link to={'/questions/new'}>
              <button
                className="ask-a-question-button-show"
                >Ask Question</button>
              </Link>


            </div>
            <div className="ask-a-question-timestamp-show">
              <p><b>Asked : </b>{` ${month}/${day}/${year}`}</p>
              <p><b>Views : </b>{this.props.question.site_hits}</p>
              </div>

            <div className="question-show-body">
            <hr />
            <p style={{fontSize: "12px", marginRight: "20%"}}>{this.props.question.body}</p>
            
            <div className="bottom-of-question-show">
              <p>asked by:</p>
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
              <p>questions asked:</p> {this.props.question.user.questions_asked.length}
                <p>questions answered:</p> {this.props.question.user.questions_answered.length} */}

            </div>

            {this.questionCount()}
            </div>


            <ul className="list-of-answers-to-this-question" 
            style={{listStyle : "none"}}
            >

              {this.props.answers.map((answer, i) => (
                this.possibleAnswer(answer, i)
              ))}

            </ul>
            
            {this.answerBox()}


          </div>
        </div>
      )
    }
  }
}




export default withRouter(QuestionsShow);