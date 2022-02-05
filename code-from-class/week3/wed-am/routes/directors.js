const express = require('express')
const db = require('../db/db')

const router = express.Router()


router.get('/', async (req, res) => {
  const directors = await db.getDirectors()
  const viewData = {
    directors 
  }
  res.render('directors', viewData)
})

router.get('/create', async (req, res) => {
  res.render('directorForm')
})

router.post('/create', async (req, res) => {
  const name = req.body.name
  await db.createDirector(name)
  res.redirect('/directors')
})


module.exports = router