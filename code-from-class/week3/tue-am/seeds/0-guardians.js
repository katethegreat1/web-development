exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('guardians').del()
    .then(function () {
      // Inserts seed entries
      return knex('guardians').insert([
        { id: 1, first_name: 'Ammy', last_name: 'Dunne', phone: '1' },
        { id: 2, first_name: 'Hans', last_name: 'Landa', phone: '2' },
        { id: 3, first_name: 'Hans', last_name: 'Gruber', phone: '3' },
        { id: 4, first_name: 'Warden', last_name: 'Nortorn', phone: '4' }
      ])
    })
}
