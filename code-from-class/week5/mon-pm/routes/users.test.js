const request = require('supertest')
const server = require('../server')
const db = require('../db')

jest.mock('../db')

test('GET /users should return an object', () => {

  db.getUsers.mockImplementation(() => Promise.resolve(
    [
      {
        id: 1000,
        name: "testname",
        email: "testemail"
      }
    ]
  ))

  return request(server)
    .get('/users')
    .expect(200)
    .then(res => {
      expect(res.body.users).not.toBeUndefined()
      expect(res.body.users[0].id).toBe(1000)
      expect(res.body.users[0].name).toBe('testname')
      expect(res.body.users[0].email).toBe('testemail')
    })
})

test('POST /users return 200', () => {
  const user = {
    name: 'harakeke is the best',
    email: 'harakeke@example.com'
  }

  db.addNewUser.mockImplementation((input) => {
    return Promise.resolve(567)
  })

  return request(server)
    .post('/users')
    .send(user)
    .then((res) => {
      expect(res.body).toBe(567)
    })
})

test('POST /users return 500', () => {
  const user = {
    name: '',
    email: ''
  }

  db.addNewUser.mockImplementation((input) => {
    return Promise.resolve(567)
  })

  return request(server)
    .post('/users')
    .expect(500)
    .send(user)
    .then((res) => {
      expect(res.body.error).toBe('email and name should longer than 5 characters' )
    })
})