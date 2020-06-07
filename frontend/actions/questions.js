import * as QUESTIONUtil from '../util/questions'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'

const receiveQuestion = (question) => {
  return ({
    type: RECEIVE_QUESTION,
    question
  })
};
const receiveQuestions = (questions) => {
  return ({
    type: RECEIVE_QUESTIONS,
    questions
  })
};

export const fetchQuestions = () => dispatch => (
  QUESTIONUtil.fetchQuestion()
  .then(questions => dispatch(receiveQuestions(questions))));

export const fetchQuestion = (questionId) => dispatch => (
  QUESTIONUtil.fetchQuestions(questionId)
    .then(question => dispatch(receiveQuestion(question))));