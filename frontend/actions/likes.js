import * as VOTEUtil from '../util/vote'

export const RECEIVE_VOTES = 'RECEIVE_VOTES'

const receiveVotes = (votes) => {
  return ({
    type: RECEIVE_VOTES,
    votes
  })
};


export const postVote = (vote) => dispatch => (
  VOTEUtil.postVote(vote)
    .then(() => dispatch(receiveVotes())))

export const fetchVotes = () => dispatch => (
  QUESTIONUtil.fetchVotes()
    .then(votes => dispatch(receiveVotes(votes))));