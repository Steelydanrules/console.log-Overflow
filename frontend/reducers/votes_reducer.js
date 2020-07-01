import {
  RECEIVE_VOTES,
  RECEIVE_VOTE,
} from '../actions/votes';

const votesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VOTE:
      return Object.assign({}, state, action.vote );
    case RECEIVE_VOTES:
      return Object.assign({}, state, action.votes);
    default:
      return state;
  }
};

export default votesReducer