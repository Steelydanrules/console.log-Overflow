export const fetchQuestions = () => {
  return(
  $.ajax({
    url: '/api/questions'
  })
)};

export const searchQuestions = (searchData) => {
  return(
  $.ajax({
    url: '/api/questions',
    data: {searchData}
  })
)};

export const fetchQuestion = (questionId) => (
  $.ajax({
    url: `/api/questions/${questionId}`
  })
);

export const postQuestion = (question) => (
  $.ajax({
    url: '/api/questions',
    method: 'POST',
    data: {question}
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
