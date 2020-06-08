import {
  RECEIVE_ANSWERS,
  RECEIVE_ANSWER,
  REMOVE_ANSWER
} from '../actions/answers';

const answersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANSWER:
      return Object.assign({}, state, action.answer);
    case RECEIVE_ANSWERS:
      return Object.assign({}, state, action.answers);
    case REMOVE_ANSWER:
      let nextState = Object.assign({}, state);
      delete nextState[action.answerId]
      return nextState;
    default:
      return state;
  }
};

export default answersReducer
