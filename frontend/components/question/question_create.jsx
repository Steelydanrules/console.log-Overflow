import React from 'react';
import { Link, Route, Redirect, BrowserRouter } from 'react-router-dom';


class QuestionCreate extends React.Component {
  constructor(props) {
    // debugger
    super(props);

    this.state = this.props.question;

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.postQuestion(this.state)
    this.setState({title: "",body: "",tag: ""})
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return(

      <div className="create-question-form-background">
        <div className="create-question-form-container">
          <div className="create-question-header">
          <h3>Ask a Public Question</h3>

            <img src={window.askQuestionHeader}
            id="ask-q-logo-header" />
            {/* style={{ width: "230px", height: "60px" }} /> */}
          </div>





          
          <div className="create-question-container-form-and-other-stuff">


            <div className="create-question-actual-form-container">
              <form className="create-question-actual-form"
              onSubmit={this.handleSubmit}>

                  <p className="create-question-input">Title</p>
                <p className="create-question-input-subtext">Be specific and imagine you’re asking a question to another person</p>
                  <input
                  value={this.state.title}
                  style={{height: "25px"}}
                  onChange={this.handleChange('title')}
                  />

                  <p className="create-question-input">Body</p>
                <p className="create-question-input-subtext">Include all the information someone would need to answer your question</p>
                  <textarea
                  value={this.state.body}
                  style={{height: "250px"}}
                  onChange={this.handleChange('body')}
                  />

                  <p className="create-question-input">Tag</p>
                  <p className="create-question-input-subtext">Add a tag to help your fellow loggers!</p>
                  <input
                  value={this.state.tag} 
                  style={{height: "25px"}}
                  onChange={this.handleChange('tag')}
                  />
                <button type='submit'>Submit Your Question</button>
              </form>


            </div>
            
              <div className="right-side-send-q-tips">
              <div className="right-side-quesiton-tips-div">
                <div>
                  <h2>Draft your question!</h2>
                  
              </div>

              <div>The community is here to help you with specific coding, 
              algorithm, or language problems.
              Avoid asking opinion-based questions.</div>
              <br />

              <div>
                <b>1. Summarize the Problem</b>
                <ul>
                  <li>
                      Include details about your goal
                  </li>
                  <li>
                      Describe expected and actual results
                  </li>
                  <li>
                      Include any error messages
                  </li>

                </ul>
                <br />
              </div>

                <div><b>2. Describe what you've tried</b></div>
                <br />
              <div>
                
                Show what you’ve tried and tell us what you found 
                (on this site or elsewhere) and why it didn’t meet your 
                needs. You can get better answers when you provide research!
              </div>

                <br />

              <div><b>3. Show some code</b></div>
                <br />
              <div>
                When appropriate, share the minimum amount of code others 
                need to reproduce your problem (also called a minimum, 
                reproducible example)
              </div>

              </div>
          
              </div>
          </div>

        </div>
      </div>
    )
  }

}

export default QuestionCreate
