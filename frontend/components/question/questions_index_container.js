import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/questions';
import QuestionIndex from './questions_index'

const mSP = (state, ownProps) => {
  return ({
    questions: Object.values(state.entities.questions)
  })
};

const mDP = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions())
})

export default connect(mSP, mDP)(QuestionIndex)