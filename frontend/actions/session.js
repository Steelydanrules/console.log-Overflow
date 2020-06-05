import { postUser,
postSession,
deleteSession } from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';


const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = (errors) => {
  return({
  type: RECEIVE_SESSION_ERRORS,
  errors
})};

export const clearSessionErrors = () => {
  return({
  type: CLEAR_SESSION_ERRORS
})};





export const createNewUser = formUser => dispatch => postUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)), errors => (
    dispatch(receiveSessionErrors(errors.responseJSON))
  ));

export const login = formUser => dispatch => postSession(formUser)
  .then(user => dispatch(receiveCurrentUser(user)), errors => (
    dispatch(receiveSessionErrors(errors.responseJSON))
  ));
  
export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));
