import React from 'react';
import { Link } from 'react-router-dom';
import {ShowIndexItem} from './show_index_item'


class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.fetchQuestions()

  }

  render() {
    if (this.props.questions[0] === undefined || this.props.questions.length === 0) {
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
                <button
                  className="ask-a-question-button-index"
                  >Ask Question</button>
              </div>
              <h5 style={{marginLeft: "5%"}}>
                {this.props.questions.length + "  "}
              Total Questions!</h5>

              <ul className="index-list-of-questions">

              {this.props.questions.map(question => (
                <ShowIndexItem 
                question={question}
                />
                ))}
              
              </ul>

            </div>



          </div>
        )
      }
  }
}




export default QuestionsIndex;
