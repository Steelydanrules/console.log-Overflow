export const postVote = (vote) => (
  $.ajax({
    url: '/api/votes',
    method: 'POST',
    data: { vote }
  })
);