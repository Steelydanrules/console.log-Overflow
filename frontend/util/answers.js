export const fetchAnswers = () => {
  return (
    $.ajax({
      url: '/api/answers'
    })
  )
};

export const fetchAnswer = (answerId) => (
  $.ajax({
    url: `/api/answers/${answerId}`
  })
);

export const postAnswer = (answerData) => (
  $.ajax({
    url: '/api/answers',
    method: 'POST',
    data: { answerData }
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
