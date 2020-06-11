export const fetchUser = userId => {
  return ( 
    $.ajax({
      url: `api/users/${userId}`,
      method: 'GET'
    })
  )
}

export const searchQuestions = searchData => {
  return ( 
    $.ajax({
      url: `api/questions`,
      method: 'GET',
      data: {searchData}
    })
  )
}