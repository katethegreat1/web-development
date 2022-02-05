exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('kids').del()
    .then(function () {
      // Inserts seed entries
      return knex('kids').insert([
        { id: 1, guardian_id: 1, name: 'Teemo' },
        { id: 2, guardian_id: 3, name: 'Nunuj' }
      ])
    })
}
