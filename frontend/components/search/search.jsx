import React from 'react';
import { Link } from 'react-router-dom';
import { ShowIndexItem } from '../question/show_index_item'

class Search extends React.Component {
  constructor(props) {
    super(props);

  }



  componentDidMount() {

  }

  render() {
    if (this.props.questions[0] === undefined || this.props.questions.length === 0) {
      return (
        <div style={{marginLeft: "30%", paddingBottom: "30%", paddingTop: "25px"}}>
          <br />
          <br />
          no results :( Please try another phrase
        </div>
      )
    } else {
      return (

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
              <h3>Here are the results!</h3>
              <Link to={'/questions/new'}>
                <button
                  className="ask-a-question-button-show"
                >Ask Question</button>
              </Link>
            </div>
            <h5 style={{ marginLeft: "5%" }}>
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




export default Search;
