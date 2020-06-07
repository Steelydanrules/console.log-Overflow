import React from 'react';

class QuestionsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    console.log(this.props)
    this.props.fetchQuestions()

  }

  render() {
    if (Object.values(this.props.questions).length === 0) {
      return(
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          LOADING
        </div>
      )} else {
        return(
          <div>
          <br />
          <br />
          <br />
          <br />
          <br />
            {this.props.questions.length}
          </div>
        )
      }
  }
}




export default QuestionsIndex;
