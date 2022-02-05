exports.up = function (knex) {
  return knex.schema.createTable('kids', (table) => {
    table.increments('id').primary()
    table.integer('guardian_id').references('guardians.id')
    table.string('name')
    table.string('notes')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('kids')
}
