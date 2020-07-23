import React from 'react';
import { Link } from 'react-router-dom';
import {ShowIndexItem} from './show_index_item'
import { withRouter } from 'react-router-dom';


class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.loaded = false;
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
          <li className="hot-questions-header" style={{fontSize: "32px", textAlign:"center"}}>Hot Questions</li>
      <li className="hot-questions-title">
          <Link to={`/questions/${topFive[0].id}`}>{topFive[0].title}</Link>
      </li>
          <li className="hot-questions-li">{this.limitChars(topFive[0].body)}</li>
      <li className="hot-questions-title">
          <Link to={`/questions/${topFive[1].id}`}>{topFive[1].title}</Link>
      </li>
          <li className="hot-questions-li">{this.limitChars(topFive[1].body)}</li>
      <li className="hot-questions-title">
          <Link to={`/questions/${topFive[2].id}`}>{topFive[2].title}</Link>
      </li>
          <li className="hot-questions-li">{this.limitChars(topFive[2].body)}</li>
      <li className="hot-questions-title">
          <Link to={`/questions/${topFive[3].id}`}>{topFive[3].title}</Link>
      </li>
          <li className="hot-questions-li">{this.limitChars(topFive[3].body)}</li>
      <li className="hot-questions-title">
          <Link to={`/questions/${topFive[4].id}`}>{topFive[4].title}</Link>
      </li>
          <li className="hot-questions-li">{this.limitChars(topFive[4].body)}</li>
      </ul>
      )
    }
  }



  render() {
    if (this.props.questions[0] === undefined || this.props.questions.length === 1) {
      return(
        <div style={{ marginBottom: "1800px" }}>
          <br />
          <br />
          <br />
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

              <ul className="left-nav-link-list">
                <li className="left-nav-link-item"
                  onClick={event => window.location.href =
                    'https://github.com/Steelydanrules'}>
                      Github
                </li>
                <li className="left-nav-link-item"
                  onClick={event => window.location.href =
                    'https://www.linkedin.com/in/karlkonetsky/'}>
                  LinkedIn
                </li>
                <li className="left-nav-link-item"
                  onClick={event => window.location.href =
                    'https://angel.co/u/karl-konetsky'}>
                  Angel List
                </li>
                <li className="left-nav-link-item"
                  onClick={event => window.location.href =
                    'https://steelydanrules.github.io/Karl_Konetsky.github.io/'}>
                  Personal
                </li>
              </ul>

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
