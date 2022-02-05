exports.seed = knex =>
  knex('directors').del()
    .then(() =>
      knex('directors').insert([
        { id: 77701, name: 'Simon West' },
        { id: 77702, name: 'Joel Coen and Ethan Coen' },
        { id: 77703, name: 'Norman Jewison' },
        { id: 77704, name: 'David Lynch' },
        { id: 77705, name: 'John Woo' },
        { id: 77706, name: 'Brad Silberling' },
        { id: 77707, name: 'Michael Bay' }
      ]))
