const express = require('express')
const db = require('../db/db')

const router = express.Router()

// Replace the starter route below with the routes you need to build
router.get('/', async (req, res) => {
  try {
    const films = await db.getFilms()
    const viewData = {
      films
    }
    res.render('films', viewData)
  } catch (error) {
    res.redirect('/error')
    console.error(error);
  }
})

router.get('/create', async (req, res) => {
  try {
    const directors = await db.getDirectors()
    const quotes = await db.getQuotes()

    const viewData = {
      directors,
      quotes
    }
    res.render('filmForm', viewData)
  } catch (error) {
    res.redirect('/error')
    console.error(error);
  }
})

router.post('/create', async (req, res) => {

  try {
    const { name, genre, directorId, quoteId } = req.body
    const film = { name, genre, directorId, quoteId }
    await db.createFilm(film)

    res.redirect('/films')
  } catch (error) {
    res.redirect('/error')
    console.error(error);
  }
})

module.exports = router
