exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('languages').del()
    .then(function () {
      // Inserts seed entries
      return knex('languages').insert([
        { id: 1, name: 'Javascript' },
        { id: 2, name: 'Typescript' },
        { id: 3, name: 'Rust' }
      ])
    })
}
