import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/questions';
import QuestionShow from './question_show'
import { fetchAnswers, patchAnswer, deleteAnswer } from '../../actions/answers';
import { postVote } from '../../util/vote';

const mSP = (state, ownProps) => {
  // debugger
  const question = state.entities.questions[ownProps.match.params.id];
  let answers;
  if (question) {
  answers = question.answer_ids.map(answerId => state.entities.answers[answerId]);
  }
  const session = state.session.id;
  debugger
  if (session === undefined) {
    return ({
      question,
      answers,
      session,
    })
  } else {
    const currentUser = state.entities.users[session]
    return ({
      question,
      answers,
      session,
      currentUser
    })
  }
};

const mDP = dispatch => ({
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  fetchAnswers: (questionId) => dispatch(fetchAnswers(questionId)),
  patchAnswer: (answerData) => dispatch(patchAnswer(answerData)),
  deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
  fetchVotes: (questionId) => dispatch(fetchVotes(questionId)),
  postVote: (vote) => dispatch(postVote(vote))

  // fetchAnswer: (answerId) => dispatch(fetchAnswer(answerId))
})

export default connect(mSP, mDP)(QuestionShow)