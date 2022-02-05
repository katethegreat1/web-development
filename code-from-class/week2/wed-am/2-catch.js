const { getPlayerStats } = require('./utils')

getPlayerStats('richard')
  .then((avg) => {
    console.log('average is ', avg);
  })
  .catch((err) => {
    console.error('here is the error ', err);
  })