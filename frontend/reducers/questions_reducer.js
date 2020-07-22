import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION } from '../actions/questions';
import { RECEIVE_ANSWER } from '../actions/answers';
import {merge} from 'lodash'

const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTION:
      return Object.assign({}, {[action.question.id] : action.question} );
    case RECEIVE_QUESTIONS:
      return Object.assign({}, state, action.questions);
    case RECEIVE_ANSWER:
      console.log(this)
      const newId = action.answer.id;
      const newState = merge({}, state );
      if (newState[action.answer.question_id].answer_ids === undefined){
        return { [action.answer.id]: action.answer };
      }
      newState[action.answer.question_id].answer_ids.push(newId);
      return newState;
    case REMOVE_QUESTION:
      let nextState = Object.assign({}, state);
      delete nextState[action.questionId]
      return nextState;
    default:
      return state;
  }
};

export default questionsReducer
