import * as QUESTIONUtil from '../util/questions'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'
export const REMOVE_QUESTION = 'REMOVE_QUESTION'


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

const removeQuestion = (questionId) => {
  return ({
    type: REMOVE_QUESTION,
    questionId
  })
};


export const fetchQuestions = () => dispatch => (
  QUESTIONUtil.fetchQuestions()
  .then(questions => dispatch(receiveQuestions(questions))));

export const fetchQuestion = (questionId) => dispatch => (
  QUESTIONUtil.fetchQuestions(questionId)
    .then(question => dispatch(receiveQuestion(question))));

export const postQuestion = (question) => dispatch => (
  QUESTIONUtil.postQuestion(question)
    .then(question => dispatch(receiveQuestion(question))));

export const patchQuestion = (question) => dispatch => (
  QUESTIONUtil.patchQuestion(question)
    .then(question => dispatch(receiveQuestion(question))));

// export const addViewQuestion = (question) => dispatch => (
//   QUESTIONUtil.addViewQuestion(question)
//     .then(question => dispatch(receiveQuestion(question))));

export const deleteQuestion = (questionId) => dispatch => (
  QUESTIONUtil.deleteQuestion(questionId)
    .then(question => dispatch(removeQuestion(question.id))));