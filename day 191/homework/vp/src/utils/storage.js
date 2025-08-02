export const getUsers = () => {
  return JSON.parse(localStorage.getItem('users') || '[]')
}

export const saveUser = (user) => {
  const users = getUsers()
  users.push(user)
  localStorage.setItem('users', JSON.stringify(users))
}

export const setLoggedInUser = (username) => {
  localStorage.setItem('loggedInUser', username)
}

export const getLoggedInUser = () => {
  return localStorage.getItem('loggedInUser')
}
