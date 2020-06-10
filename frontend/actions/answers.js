import * as ANSWERUtil from '../util/answers'

export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS'
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER'
export const REMOVE_ANSWER = 'REMOVE_ANSWER'


const receiveAnswer = (answer) => {
  return ({
    type: RECEIVE_ANSWER,
    answer
  })
};

const receiveAnswers = (answerId) => {
  return ({
    type: RECEIVE_ANSWERS,
    answerId
  })
};

const removeAnswer = (answerId) => {
  return ({
    type: REMOVE_ANSWER,
    answerId
  })
};

export const fetchAnswers = () => dispatch => (
  ANSWERUtil.fetchAnswers()
    .then(answers => dispatch(receiveAnswers(answerId))));

export const fetchAnswer = (answerId) => dispatch => (
  ANSWERUtil.fetchAnswers(answerId)
    .then(answer => dispatch(receiveAnswer(answer))));


export const postAnswer = (answer) => dispatch => (
  ANSWERUtil.postAnswer(answer)
    .then(answer => dispatch(receiveAnswer(answer))));

export const patchAnswer = (answer) => dispatch => (
  ANSWERUtil.patchAnswer(answer)
    .then(answer => dispatch(receiveAnswer(answer))));


export const deleteAnswer = (answerId) => dispatch => (
  ANSWERUtil.deleteAnswer(answerId)
    .then(answer => dispatch(removeAnswer(answer.id))));