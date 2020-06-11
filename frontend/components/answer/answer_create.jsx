import React from 'react';

class AnswerCreate extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.answer
  }


  handleChange() {
    return e => this.setState({ body: e.currentTarget.value });
  }



  handleSubmit(e) {
    e.preventDefault();
    let submitThis = Object.assign({ question_id: this.props.questionId }, this.state)
    this.props.postAnswer(submitThis)
    this.setState({ body: "" })
    this.forceUpdate()
  }  



  render(){

    return(
    <div className="answer-create-form">
      <form className="answer-create-actual-form"
      onSubmit={this.handleSubmit}>
        <textarea
        className="answer-input-box"
        onChange={this.handleChange()}
        value={this.state.body} />
        <br />
        <button type="submit">
          Add answer
        </button>
      </form>
    </div>
    )

  }


}

export default AnswerCreate