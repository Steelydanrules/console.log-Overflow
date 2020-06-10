import { connect } from 'react-redux';
import { postAnswer } from '../../actions/answers';
import AnswerCreate from './answer_create'

const mSP = state => ({
  answer: {
    body: ''
  }
});

const mDP = dispatch => ({
  postAnswer: (answer) => dispatch(postAnswer(answer)),
  fetchAnswer: (answerId) => dispatch(fetchAnswer(answerId))
})

export default connect(mSP, mDP)(AnswerCreate)