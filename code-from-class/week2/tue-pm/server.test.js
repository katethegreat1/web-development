const request = require('supertest')
const cheerio = require('cheerio')

const server = require('./server')

test('/GET ensure that the test returns The Estate of artist is who is deceased', (done) => {
  request(server)
    .get('/')
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const artistText = $('[data-test-deceased]').text()
      expect(artistText).toMatch('The Estate of')
      expect(err).toBeNull()
      done()
    })
})

test('GET / display the correct number of artworks', (done) => {
  request(server)
    .get('/')
    .end((err, res) => {
      const $ = cheerio.load(res.text)
      const artworkListItem = $('.artworkListing li')
      expect(artworkListItem).toHaveLength(14)
      expect(err).toBeNull()
      done()
    })
})
