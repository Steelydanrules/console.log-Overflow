export const postVote = (vote) => (
  $.ajax({
    url: '/api/votes',
    method: 'POST',
    data: { vote }
  })
);

export const fetchVotes = (questionId) => {
  debugger
  return (
    $.ajax({
      url: `/api/questions/${questionId}/votes`
    })
  )
};