import { connect } from 'react-redux';
import { postQuestion } from '../../actions/questions';
import QuestionCreate from './question_create'

const mSP = (state, ownProps) => {
  return ({
    question: {
      title: "",
      body: "",
      tag: ""
    }
  })
};

const mDP = dispatch => ({
  postQuestion: (questionData) => dispatch(postQuestion(questionData)),
  // addViewQuestion: (questionId) => dispatch(addViewQuestion(questionId))
})

export default connect(mSP, mDP)(QuestionCreate)