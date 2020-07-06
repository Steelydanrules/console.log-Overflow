import {
  RECEIVE_VOTES,
  RECEIVE_VOTE,
} from '../actions/votes';

const votesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VOTE:
      

      return Object.assign({}, state, {[action.vote.id] : action.vote });
      // return Object.assign({}, state);
    case RECEIVE_VOTES:
      return action.votes;
    default:
      return state;
  }
};

export default votesReducer