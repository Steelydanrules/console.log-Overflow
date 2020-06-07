import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION } from '../actions/questions';

const questionsReducer = (state = {}, action) => {
  console.log(action)
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTION:
      return Object.assign({}, state, action.question );
    case RECEIVE_QUESTIONS:
      return Object.assign({}, state, action.questions);
    case REMOVE_QUESTION:
      let nextState = Object.assign({}, state);
      delete nextState[action.questionId]
      return nextState;
    default:
      return state;
  }
};

export default questionsReducer
