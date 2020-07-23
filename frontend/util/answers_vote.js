export const postAnswerVote = (answerVote) => (
  $.ajax({
    url: '/api/answer_votes',
    method: 'POST',
    data: { answerVote }
  })
);

export const fetchAnswerVotes = (answerId) => {
  return (
    $.ajax({
      url: `/api/answers/${answerId}/answer_votes`
    })
  )
};

export const fetchAnswerVotestoQuestion = (id) => {
  return (
    $.ajax({
      url: `/api/answer_votes/${id}`,
      method: 'GET'
    })
  )
};

