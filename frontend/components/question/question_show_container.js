import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/questions';
import QuestionShow from './question_show'
import { fetchAnswers } from '../../actions/answers';

const mSP = (state, ownProps) => {
  // debugger
  const question = state.entities.questions[ownProps.match.params.id];
  let answers;
  if (question) {
  answers = question.answer_ids.map(answerId => state.entities.answers[answerId]);
  }
  const session = state.session.id;

  return ({
    question,
    answers,
    session
  })
};

const mDP = dispatch => ({
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  fetchAnswers: (questionId) => dispatch(fetchAnswers(questionId))
  // fetchAnswer: (answerId) => dispatch(fetchAnswer(answerId))
})

export default connect(mSP, mDP)(QuestionShow)