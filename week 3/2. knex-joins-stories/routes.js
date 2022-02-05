const express = require('express')

const router = express.Router()

// Replace the starter route below with the routes you need to build
router.get('/', (req, res) => {
  res.send('<h1>Good Luck...</h1><img src="../images/88805.jpg">')
})

module.exports = router
