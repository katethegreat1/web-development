const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.get('/', async (req, res) => {
  const quotes = await db.getQuotes()
  const viewData = {
    quotes
  }
  res.render('quotes', viewData)
})

router.get('/create', async (req, res) => {
  res.render('quoteForm')
})

router.post('/create', async (req, res) => {
  const quote = req.body.quote
  await db.createquote(quote)
  res.redirect('/quotes')
})

module.exports = router
