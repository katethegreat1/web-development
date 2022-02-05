const config = require('./knexfile').development
const database = require('knex')(config)

function createDirector(name, db = database) {
  return db('directors')
    .insert({ name })
}

function createquote(quote, db = database) {
  return db('quotes')
    .insert({ quote })
}


function getDirectors(db = database) {
  return db('directors')
    .select()
}

function getQuotes(db = database) {
  return db('quotes')
    .select()
}

function getFilms(db = database) {
  return db('films')
    .join('directors', 'films.director_id', 'directors.id')
    .join('quotes', 'films.quote_id', 'quotes.id')
    .select(
      'quote',
      'quotes.id as quoteId',
      'directors.name as directorName',
      'directors.id as directorId',
      'films.name as filmName',
      'genre'
    )
}

function createFilm(film, db = database) {
  const { name, genre, directorId, quoteId } = film
  const newfilm = {
    name,
    genre,
    director_id: directorId,
    quote_id: quoteId
  }
  return db('films')
    .insert(newfilm)
}


module.exports = {
  createDirector: createDirector,
  createquote,
  createFilm,
  getDirectors,
  getQuotes,
  getFilms
}