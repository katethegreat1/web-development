const pilot = require('./starwars')
const queries = require('./queries')

// const result = queries.getHeight(pilot)
// const result = queries.getHomeworldClimate(pilot )
// const result = queries.getFirstStarshipsModel(pilot)
// const result = queries.getSecondStarshipsRating(pilot)
const result = queries.getShipNames(pilot)
// const result = queries.getTheCrewDoubled(pilot)
// const result = queries.getCheapestShip(pilot)
// const result = queries.getValueOfAllShips(pilot)

// eslint-disable-next-line no-console
console.log('result:', result)
