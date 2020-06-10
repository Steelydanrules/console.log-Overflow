export const fetchAnswers = (userId) => {
  return (
    $.ajax({
      url: `/api/users/${userId}/answers`
    })
  )
};

export const fetchAnswer = (answerId) => (
  $.ajax({
    url: `/api/answers/${answerId}`
  })
);

export const postAnswer = (answer) => (
  $.ajax({
    url: '/api/answers',
    method: 'POST',
    data: { answer }
  })
);

export const patchAnswer = (answerData) => (
  $.ajax({
    url: `/api/answers/${answerData.id}`,
    method: 'PATCH',
    data: { answerData }
  })
);

export const deleteAnswer = (answerId) => (
  $.ajax({
    url: `/api/answers/${answerId}`,
    method: 'DELTE'
  })
);
