const { averageTime, getPlayerStats } = require('./utils')

// print player stats

 getPlayerStats('ahmad')
 .then((stats) => {
   console.log('player stats', stats);
 })

// print average for some array 
averageTime([ 240, 300, 266, 310, 254 ])
.then((average) => {
 console.log('average ', average); 
})