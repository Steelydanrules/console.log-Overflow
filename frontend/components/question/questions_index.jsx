import React from 'react';
import { Link } from 'react-router-dom';
import {ShowIndexItem} from './show_index_item'
import { withRouter } from 'react-router-dom';


class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.loaded = false;
    // this.topFiveQuestion = this.topFiveQuestion.bind(this)
  }

  componentDidMount(){
    this.props.fetchQuestions();
    this.loaded = true;
  }

  questionLinkItem() {
    let sortedQ = this.props.questions.sort((a, b) => {
      return parseFloat(b.site_hits) - parseFloat(a.site_hits);
    });

    return sortedQ.slice(0, 5);
  }

  limitChars(text) {
    if (text.length < 255) {
      return text
    } else {
      console.log(text)
      return text.slice(0, 255) + "..."
    }
  }



  topFiveQuestion(){
    if (this.loaded === false) {
      return
    } else {
      let topFive = this.questionLinkItem();
      return(
      <ul className="hot-questions-list">
          <li>Hot Questions</li>
      <li>
          <Link to={`/questions/${topFive[0].id}`}>{topFive[0].title}</Link>
          <br />
          <p>{this.limitChars(topFive[0].body)}</p>
      </li>
      <li>
          <Link to={`/questions/${topFive[1].id}`}>{topFive[1].title}</Link>
          <br />
          <p>{this.limitChars(topFive[1].body)}</p>
      </li>
      <li>
          <Link to={`/questions/${topFive[2].id}`}>{topFive[2].title}</Link>
          <br />
          <p>{this.limitChars(topFive[2].body)}</p>
      </li>
      <li>
          <Link to={`/questions/${topFive[3].id}`}>{topFive[3].title}</Link>
          <br />
          <p>{this.limitChars(topFive[3].body)}</p>
      </li>
      <li>
          <Link to={`/questions/${topFive[4].id}`}>{topFive[4].title}</Link>
          <br />
          <p>{this.limitChars(topFive[4].body)}</p>
      </li>
      </ul>
      )
    }
  }



  render() {
    if (this.props.questions[0] === undefined || this.props.questions.length === 0) {
    // if (this.loaded = false) {
      return(
        <div>
          <br />
          <br />
          LOADING
        </div>
      )} else {
        return(

          <div className="question-index-container">
            <div className="question-index-left">
              
              <Link to="/questions">
              <button className="left-nav-home-button">
                Home
              </button>
              </Link>
              
            </div>

            <div className="question-index-right">
              <div className="questions-index-header">
                <h3>Top Questions</h3>
                <Link to={'/questions/new'}>
                  <button
                    className="ask-a-question-button-show"
                  >Ask Question</button>
                </Link>
              </div>
              <h5 style={{marginLeft: "5%"}}>
                {this.props.questions.length + "  "}
              Total Questions!</h5>

              <ul className="index-list-of-questions">

              {this.props.questions.map((question, idx) => (
                <ShowIndexItem 
                key={idx}
                question={question}
                />
                ))}
              
              </ul>

            </div>

              <div className="hot-questions-container">
                <div className="hot-questions">
                  {this.topFiveQuestion()}
                </div>
              </div>


          </div>
        )
      }
  }
}




export default withRouter(QuestionsIndex);
