import * as ANSWERVOTEUtil from '../util/answers_vote'

export const RECEIVE_ANSWER_VOTES = 'RECEIVE_ANSWER_VOTES'
export const RECEIVE_ANSWER_VOTE = 'RECEIVE_ANSWER_VOTE'

const receiveAnswerVotes = (answerVotes) => {
  return ({
    type: RECEIVE_ANSWER_VOTES,
    answerVotes
  })
};

const receiveAnswerVote = (answerVote) => {
  return ({
    type: RECEIVE_ANSWER_VOTE,
    answerVote
  })
};


export const postAnswerVote = (answerVote) => dispatch => {

  return (
    ANSWERVOTEUtil.postAnswerVote(answerVote)
      .then((answerVote) => dispatch(receiveAnswerVote(answerVote))))
};

export const fetchAnswerVotes = (answerId) => dispatch => (
  ANSWERVOTEUtil.fetchAnswerVotes(answerId)
    .then(answerVotes => dispatch(receiveAnswerVotes(answerVotes))));
