import { RECEIVE_CURRENT_USER } from '../actions/session';
import { RECEIVE_USER } from '../actions/user';

const usersReducer = (state = {}, action) => {
  console.log(action)
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;