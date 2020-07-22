import {
  RECEIVE_VOTES,
  RECEIVE_VOTE,
} from '../actions/votes';

const votesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VOTE:
      

      return Object.assign({}, state, {[action.vote.id] : action.vote });
      // return Object.assign({}, state.vote);
    case RECEIVE_VOTES:
      debugger
      return action.votes;
    default:
      return state;
  }
};

export default votesReducer