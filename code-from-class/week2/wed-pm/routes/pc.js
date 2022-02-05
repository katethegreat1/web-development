const express = require('express')

const router = express.Router()
module.exports = router

router.get('/', (req, res) => {
  res.send('welcome to the PC console page')
})

router.get('/list', (req, res) => {
  res.send('PC console listing all games here')
})

router.get('/new', (req, res) => {
  res.send('New games on PC, BUY NOW!')
})
