// IMPORT THE BASICS
const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')

// IMPORT THE DATA
const data = require('./data')

// CREATE YOUR SERVER
const server = express()
module.exports = server

// ADD PUBLIC FOLDER
const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// CREATE A NEW VIEW ENGINE (using express-handlebars)
server.engine('hbs', hbs({ extname: 'hbs' }))

// WIRE YOUR HBS VIEW ENGINE INTO YOUR SERVER
server.set('view engine', 'hbs')

// WRITE THOSE ROUTES
server.get('/', (req, res) => {
  const viewData = {
    artists: data.artists
  }
  res.render('home', viewData)
})
