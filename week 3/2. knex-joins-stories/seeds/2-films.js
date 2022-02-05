exports.seed = knex =>
  knex('films').del()
    .then(() => knex('films').insert([
      { id: 88801, name: 'Con Air', genre: 'Action, Crime, Thriller', director_id: 77701 },
      { id: 88802, name: 'Raising Arizona', genre: 'Comedy, Crime', director_id: 77702 },
      { id: 88803, name: 'Moonstruck', genre: 'Romance, Comedy, Drama', director_id: 77703 },
      { id: 88804, name: 'Wild at Heart', genre: 'Comedy, Crime, Drama', director_id: 77704 },
      { id: 88805, name: 'Face/Off', genre: 'Action, Crime, Sci-Fi', director_id: 77705 },
      { id: 88806, name: 'City of Angels', genre: 'Drama, Romance, Fantasy', director_id: 77706 },
      { id: 88807, name: 'The Rock', genre: 'Action, Adventure, Thriller', director_id: 77707 }
    ]))
