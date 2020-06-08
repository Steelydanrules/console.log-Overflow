export const fetchQuestions = () => {
  return(
  $.ajax({
    url: '/api/questions'
  })
)};

export const fetchQuestion = (questionId) => (
  $.ajax({
    url: `/api/questions/${questionId}`
  })
);

export const postQuestion = (questionData) => (
  $.ajax({
    url: '/api/questions',
    method: 'POST',
    data: {questionData}
  })
);

export const patchQuestion = (questionData) => (
  $.ajax({
    url: `/api/questions/${questionData.id}`,
    method: 'PATCH',
    data: {questionData}
  })
);

export const deleteQuestion = (questionId) => (
  $.ajax({
    url: `/api/questions/${questionId}`,
    method: 'DELTE'
  })
);

// export const addViewQuestion = (questionData) => {
//   let oldViews = questionData[site_hits]
//   questionData[site_hits] = (oldViews + 1)
//   return(
//   $.ajax({
//     url: `/api/questions/${questionData.id}`,
//     method: 'PATCH',
//     data: { questionData }
//   })
// )};