export async function up(knex) {
  return knex.schema.createTable('lier', (table) => {
    table.increments('id')
    table.string('word1')
    table.string('word2')
    table.string('topic')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('lier')
}
