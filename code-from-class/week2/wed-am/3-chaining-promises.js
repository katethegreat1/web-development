const { averageTime, getPlayerStats } = require('./utils')

getPlayerStats('richard')
  .then((eleanorStats) => {
    console.log(eleanorStats);

    return averageTime(eleanorStats)
  })
  .then((avg) => {
    console.log('Eleanors average ', avg);
  })
  .then(() => {
    return getPlayerStats('jared')
  })
  .then((jaredStats) => {
    console.log('Jareds stats ', jaredStats);
    const jaredAverageTimePromise = averageTime(jaredStats)
    console.log('jaredAverageTimePromise: ', jaredAverageTimePromise);
    return jaredAverageTimePromise
  })
  .then((jaredAveragePinapple) => {
    console.log('jareds average ', jaredAveragePinapple);
  })
  .catch(err => {
    console.error(err);
  })
// Is it possible to chain all 4 players in one big expression?