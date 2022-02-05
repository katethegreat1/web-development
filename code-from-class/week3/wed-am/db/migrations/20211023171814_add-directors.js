exports.up = function (knex) {
  return knex.schema.table('films', function (table) {
    table.integer('director_id').references('directors.id')
    table.integer('quote_id').references('quotes.id')
  })
}

exports.down = function (knex) {
  return knex.schema.table('films', function (table) {
    table.dropColumn('director_id')
    table.dropColumn('quote_id')
  })
}
