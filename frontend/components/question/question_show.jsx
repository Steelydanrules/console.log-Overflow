import React from 'react';
import { Link } from 'react-router-dom';



class QuestionsShow extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    // this.state = this.props
  }

  componentDidMount() {
    let questionId = this.props.match.params.id
    console.log(questionId)
    this.props.fetchQuestion(questionId)
  }

  render() {
    if (this.props.question === undefined) {
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
      console.log(this.props)
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
              <button
                className="ask-a-question-button-show"
              >Ask Question</button>
            </div>
            <p className="ask-a-question-timestamp-show">
              <text><b>Asked : </b>{` ${month}/${day}/${year}`}</text>
              <text><b>Views : </b>{this.props.question.site_hits}</text>
              </p>
            <hr />
          

          </div>



        </div>
      )
    }
  }
}




export default QuestionsShow;