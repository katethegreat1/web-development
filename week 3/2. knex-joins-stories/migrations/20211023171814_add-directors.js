exports.up = function (knex) {
  return knex.schema.table('films', function (table) {
    table.integer('director_id')
  })
}

exports.down = function (knex) {
  return knex.schema.table('films', function (table) {
    table.dropColumn('director_id')
  })
}
