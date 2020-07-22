import {
  RECEIVE_ANSWER_VOTES,
  RECEIVE_ANSWER_VOTE,
} from '../actions/answer_votes';

const answerVotesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANSWER_VOTE:
      return Object.assign({}, state, { [action.answerVote.id]: action.answerVote });
    case RECEIVE_ANSWER_VOTES:
      return action.answerVotes;
    default:
      return state;
  }
};

export default answerVotesReducer