import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/questions';
import QuestionShow from './question_show'
// import { addViewQuestion } from '../../util/questions';

const mSP = (state, ownProps) => {
  return ({
    question: state.entities.questions[ownProps.match.params.id]
  })
};

const mDP = dispatch => ({
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  // addViewQuestion: (questionId) => dispatch(addViewQuestion(questionId))
})

export default connect(mSP, mDP)(QuestionShow)