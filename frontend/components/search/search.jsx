import React from 'react';
import { Link } from 'react-router-dom';
import { ShowIndexItem } from '../question/show_index_item'

class Search extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.questions[0] === undefined || this.props.questions.length === 0) {
      return (
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
                style={{ marginBottom: "1px" }}
                onClick={event => window.location.href =
                  'https://steelydanrules.github.io/Karl_Konetsky.github.io/'}>
                Personal
                </li>
            </ul>

          </div>

          <div className="question-index-right">
            <div className="questions-index-header"
              style={{ marginBottom: "60vh" }}
              >
              <h3>Please try another phrase!</h3>
              <Link to={'/questions/new'}>
                <button
                  className="ask-a-question-button-show"
                >Ask Question</button>
              </Link>
            </div>

          </div>
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
