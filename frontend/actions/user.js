import * as APIUtil from '../util/api_util'

export const RECEIVE_USER = 'RECEIVE_USER'

const receiveUser = (user) => {
  return({
  type: RECEIVE_USER,
  user
})};


export const fetchUser = userId => dispatch => (
  APIUtil.fetchUser(userId)
  .then(user => dispatch(receiveUser(user))));