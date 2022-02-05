
exports.seed = (knex) => {
  return knex('todos').del()
    .then(() => {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'Sort photos on computer'},
        {id: 2, task: 'Water dying plants'},
        {id: 3, task: 'Sell old clothes'}
      ]);
    });
};
