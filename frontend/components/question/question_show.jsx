import React from 'react';

class QuestionsShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    let questionId = this.props.match.params.id
    this.props.fetchQuestion(questionId)

  }

  render() {
    if (this.props.question === undefined) {
      return (
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          LOADING
        </div>
      )
    } else {
      return (
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          {this.props.question.body}
        </div>
      )
    }
  }
}




export default QuestionsShow;