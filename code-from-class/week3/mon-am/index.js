const config = require('./knexfile')
const development = config.development
const knex = require('knex')
const db = knex(development)

function showAllPuppies() {
  return db('puppies')
    .select()
    .then(puppies => {
      console.log(puppies);
    })
}

function createPuppy() {
  const newPup = { id: 5, name: 'george', owner: 'jared', breed: 'corgi' }

  return db('puppies')
    .insert(newPup)
}

showAllPuppies()
  .then()

// createPuppy()
//   .then()