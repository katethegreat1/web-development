exports.seed = knex =>
  knex('quotes').del()
    .then(() =>
      knex('quotes').insert([
        { id: 99901, quote: 'Sorry Boss, But There\'s Only Two Men I Trust. One Of Them\'s Me. The Other\'s Not You.' },
        { id: 99902, quote: 'I\'ll Be Taking These Huggies, And Whatever Cash You Got' },
        { id: 99903, quote: 'The Snowflakes Are Perfect. The Stars Are Perfect. Not Us. Not Us! We Are Here To Ruin Ourselves And To Break Our Hearts And Love The Wrong People And Die.' },
        { id: 99904, quote: 'Did I Ever Tell Ya That This Here Jacket Represents A Symbol Of My Individuality, And My Belief In Personal Freedom?' },
        { id: 99905, quote: 'I Want To Take His Face... Off. Eyes, Nose, Skin, Teeth. It\'s Coming Off.' },
        { id: 99906, quote: 'Some Things Are True Whether You Believe In Them Or Not.' },
        { id: 99907, quote: 'Got My First Chemistry Set When I Was Seven, Blew My Eyebrows Off, We Never Saw The Cat Again, Been Into It Ever Since.' }
      ]))
