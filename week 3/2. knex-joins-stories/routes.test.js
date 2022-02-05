const request = require('supertest')
const server = require('./server')

// Replace test below with your own!
test('list films', () => {
  const expected = 'Good Luck'
  return request(server)
    .get('/')
    .then((res) => {
      return expect(res.text).toMatch(expected)
    })
})
