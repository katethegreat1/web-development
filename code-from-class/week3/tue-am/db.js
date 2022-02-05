const config = require('./knexfile').development
const database = require('knex')(config)

function getAll (db = database) {
  return db('kids')
    .select()
}

function getParentAndKids (db = database) {
  return db('kids')
    .join('guardians', 'kids.guardian_id', 'guardians.id')
    .select(
      'kids.id as kidsId',
      'guardians.id as guardianId',
      'name as kidName',
      'last_name as guardianName'
    )
}

module.exports = {
  getAll,
  getParentAndKids
}
