export const postUser = user => {
  debugger
  return( //sends request to create a new user
  $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user },

  })
)}

export const postSession = user => ( // sends request to log in a user
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user },

  })
)

export const deleteSession = () => ( //logs user out
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
)