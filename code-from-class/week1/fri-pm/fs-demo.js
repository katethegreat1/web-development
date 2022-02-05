const fs = require('fs')

module.exports = {
  getTheGoods
}

function getTheGoods (filepath, callback) {
  fs.readFile(filepath, 'utf8', (err, contents) => {
    if (err) {
      callback(new Error('Oops, something went wrong'))
    } else {
      callback(null, contents)
    }
  })
}
