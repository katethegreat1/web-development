const express = require('express')
const router = express.Router()
const db = require('../db/db')

// GET /api/v1/languages/
router.get('/', async (req, res) => {
  const languages = await db.getLanguages()
  console.log(languages)
  res.json(languages)
})

// POST /api/v1/languages/
router.post('/', (req, res) => {
  const { name } = req.body // { name: 'value'}
  // or
  // const name = req.body.name

  db.createLanguage(name)
    .then(id => {
      res.json(id)
      return null
    })
    .catch(error => {
      res.status(500).json('insert operation has failed')
      console.error(error)
    })
})

module.exports = router
