import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/questions';
import QuestionShow from './question_show'

const mSP = (state, ownProps) => {
  return ({
    question: state.entities.questions[ownProps.match.params.id]
  })
};

const mDP = dispatch => ({
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId))
})

export default connect(mSP, mDP)(QuestionShow)