const path = require('path')
const express = require('express')
const request = require('superagent')

const server = express()

module.exports = server

const staticFolder = path.join(__dirname, 'public')
server.use(express.static(staticFolder))

server.get('/api/jokes', (req, res) => {
    // res.json({ eleanorsKey: 'looking great, Eleanor'})
    request
    .get('https://icanhazdadjoke.com')
    .set('Accept', 'application/json')
    .then(jokeApiResponse => {
         res.json({
             randomDadJoke: jokeApiResponse.body.joke
         })
    })
    .catch(err => {
        console.error(err.message)
        res.error(err.message)
      })
})