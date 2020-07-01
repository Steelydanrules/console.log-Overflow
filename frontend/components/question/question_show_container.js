import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/questions';
import QuestionShow from './question_show'
import { fetchAnswers, patchAnswer, deleteAnswer } from '../../actions/answers';
import { postVote, fetchVotes } from '../../actions/votes';

const mSP = (state, ownProps) => {
  const question = state.entities.questions[ownProps.match.params.id];
  debugger
  let answers;
  let votes = Object.values(state.entities.votes);
  if (question) {
  answers = question.answer_ids.map(answerId => state.entities.answers[answerId]);
  debugger
  }
  const session = state.session.id;
  if (session === undefined) {
    return ({
      question,
      answers,
      session,
      votes
    })
  } else {
    const currentUser = state.entities.users[session]
    return ({
      question,
      answers,
      session,
      votes,
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