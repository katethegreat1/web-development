const express = require('express')
const pcRouter = require('./routes/pc')
const profileRoute = require('./routes/profile')

const server = express()

module.exports = server

server.use('/pc', pcRouter)
server.use('/profile', profileRoute)

server.get('/', (req, res) => {
  res.send('this is the root route (homepage)')
})
