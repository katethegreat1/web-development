const express = require('express')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  res.send('here is the profile page as read-only')
})

router.get('/update', (req, res) => {
  res.send('page for updating profile')
})

router.get('/resetpassword', (req, res) => {
  res.send('reset password page')
})
