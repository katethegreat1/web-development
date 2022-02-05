const request = require('supertest')

const server = require('./server')

test('GET /about returns correct response', (done) => {
  request(server)
    .get('/about')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.text).toMatch('love frogs')
      done()
    })
})

test('POST /favFrog redirects to frog details', (done) => {
  request(server)
    .post('/favFrog')
    .send({ frogName: 'Susan'})
    .set('Content-Type','application/x-www-form-urlencoded')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(302)
      expect(res.headers.location).toBe('/frogs/2')
      done()
    })
})
