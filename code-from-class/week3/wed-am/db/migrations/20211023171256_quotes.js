exports.up = function (knex) {
  return knex.schema.createTable('quotes', function (table) {
    table.increments('id').primary()
    table.string('quote')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('quotes')
}
