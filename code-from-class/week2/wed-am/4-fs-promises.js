const fs = require('fs').promises
// const fs = require('fs/promises')

const todo = 'code⌨️, eat🍌, sleep😴'

// reading files using fs/promises
const p = fs.writeFile('my-todos.txt', todo, 'utf-8')
  .then(() => {
    console.log('file has been saved');
  })
  .catch(err => {
    console.error('ops something happend ', err);
  })
// writing to files

console.log(p);