import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/questions';
import QuestionShow from './question_show'
import { fetchAnswers, patchAnswer, deleteAnswer } from '../../actions/answers';
import { postVote, fetchVotes } from '../../actions/votes';
import { postAnswerVote, fetchAnswerVotes, fetchAnswerVotestoQuestion } from '../../actions/answer_votes';

const mSP = (state, ownProps) => {
  const question = state.entities.questions[ownProps.match.params.id];
  let answers;
  let votes = Object.values(state.entities.votes);
  let answerVotes = Object.values(state.entities.answerVotes);
  if (question) {
  answers = question.answer_ids.map(answerId => state.entities.answers[answerId]);
  }
  const session = state.session.id;
  if (session === undefined) {
    return ({
      question,
      answers,
      session,
      votes,
      answerVotes,
    })
  } else {
    const currentUser = state.entities.users[session]
    return ({
      question,
      answers,
      session,
      votes,
      answerVotes,
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
  postVote: (vote) => dispatch(postVote(vote)),
  fetchAnswerVotes: (answerId) => dispatch(fetchAnswerVotes(answerId)),
  fetchAnswerVotestoQuestion: (id) => dispatch(fetchAnswerVotestoQuestion(id)),
  postAnswerVote: (answerVote) => dispatch(postAnswerVote(answerVote)),
})

export default connect(mSP, mDP)(QuestionShow)