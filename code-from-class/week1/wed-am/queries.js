module.exports = {
  getHeight,
  getHomeworldClimate,
  getFirstStarshipsModel,
  getSecondStarshipsRating,
  getShipNames,
  getTheCrewDoubled,
  getCheapestShip,
  getValueOfAllShips
}

function getHeight (pilot) {
  return pilot.height
}

function getHomeworldClimate (pilot) {
  // return pilot.homeworld.climate
  // return pilot['homeworld'].climate
  return pilot['homeworld']['climate']
}

function getFirstStarshipsModel (pilot) {
  return pilot.starships[0]
}

function getSecondStarshipsRating (pilot) {
  return pilot.starships[1]
}

function getShipNames (pilot) {
  return pilot.starships.map(ship => ship.name )
}

function getTheCrewDoubled (pilot) {
}

function getCheapestShip (pilot) {
}

function getValueOfAllShips (pilot) {
}
