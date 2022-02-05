const express = require('express')
const db = require('./db')
const router = express.Router()

router.get('/list', (req, res) => {
  db.getAll()
    .then(kids => {
      const viewData = {
        kids: kids
      }
      console.log(viewData);
      res.render('list', viewData)
    })
})

router.get('/join', (req, res) => {
  db.getParentAndKids()
    .then(table => {

      const viewDate = {
        table
      }
      console.log(viewDate);
      res.render('table', viewDate)
    })
})

module.exports = router
