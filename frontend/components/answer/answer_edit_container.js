import { connect } from 'react-redux';
import { postAnswer, fetchAnswer } from '../../actions/answers';
import AnswerEdit from './answer_edit'

const mSP = (state, ownProps) => {
  return({
  answer: state.entities.answers[ownProps.match.params.answerId]
})};

const mDP = dispatch => ({
  postAnswer: (answer) => dispatch(postAnswer(answer)),
  fetchAnswer: (answerId) => dispatch(fetchAnswer(answerId))
})

export default connect(mSP, mDP)(AnswerEdit)