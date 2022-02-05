const express = require('express')
const hbs = require('express-handlebars')

const directorRoutes = require('./routes/directors')
const quoteRoutes = require('./routes/quotes')
const filmRoutes = require('./routes/films')

const server = express()

// Middleware
server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/directors', directorRoutes)
server.use('/quotes', quoteRoutes)
server.use('/films', filmRoutes)

server.get('/', (req, res) => {
  res.render('home')
})

module.exports = server
