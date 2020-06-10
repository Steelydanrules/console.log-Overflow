import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/questions';
import { postAnswer } from '../../actions/answers';
import QuestionShow from './question_show'
import { fetchAnswers } from '../../util/answers';
// import { addViewQuestion } from '../../util/questions';

const mSP = (state, ownProps) => {
  return ({
    question: state.entities.questions[ownProps.match.params.id],
    // answers: state.entities.answers,
    answer: { body: "", questionId: ownProps.match.params.id},
  })
};

const mDP = dispatch => ({
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  postAnswer: (answer) => dispatch(postAnswer(answer)),
  // fetchAnswers: (userId) => dispatch(fetchAnswers(userId))
  // addViewQuestion: (questionId) => dispatch(addViewQuestion(questionId))
})

export default connect(mSP, mDP)(QuestionShow)