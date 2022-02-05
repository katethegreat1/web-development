
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('puppies')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('puppies').insert([
        { id: 1, name: 'rocky', owner: 'kate', breed: 'husky' },
        { id: 2, name: 'jerry', owner: 'ahmad', breed: 'daschund' },
        { id: 3, name: 'hugo', owner: 'ahmad', breed: 'mix' }
      ]);
    });
};
