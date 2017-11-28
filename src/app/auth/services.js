import http from '../../http'

export const postLogin = (email, password) => {
  return http.post('http://localhost:8000/api/', {
    email: email,
    password: password
  })
  .then(response => response.data)
}
