import * as VOTEUtil from '../util/vote'

export const RECEIVE_VOTES = 'RECEIVE_VOTES'
export const RECEIVE_VOTE = 'RECEIVE_VOTE'

const receiveVotes = (votes) => {
  return ({
    type: RECEIVE_VOTES,
    votes
  })
};

const receiveVote = (vote) => {
  return ({
    type: RECEIVE_VOTE,
    vote
  })
};


export const postVote = (vote) => dispatch => (
  VOTEUtil.postVote(vote)
    .then((vote) => dispatch(fetchVotes(vote.questionId))));

export const fetchVotes = (questionId) => dispatch => (
  VOTEUtil.fetchVotes(questionId)
    .then(votes => dispatch(receiveVotes(votes))));