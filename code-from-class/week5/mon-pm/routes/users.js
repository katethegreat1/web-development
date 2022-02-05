const express = require('express')

const db = require('../db')

const router = express.Router()

// GET /users
router.get('/', (req, res) => {
  db.getUsers()
    .then((users) => {
      res.json({ users })
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

// GET /users/23
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getUser(id)
    .then((user) => {
      res.json({ user: user })
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

// POST /users
router.post('/', (req, res) => {
  const { name, email } = req.body

  if (name && name.length > 5 && email && email.length > 10) {
    db.addNewUser({name, email})
      .then((id) => {
        res.json(id)
      })
      .catch((err) => {
        res.status(500).json({ error: err.message })
      })
  } else {
    res.status(500).json({ error: 'email and name should longer than 5 characters' })
  }
})

// DELETE /users/23
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteUser(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
