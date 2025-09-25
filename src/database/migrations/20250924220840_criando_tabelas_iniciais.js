/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up (knex) {
  return knex.schema.createTable('marcas', (table) => {
    table.increments('id').primary()
    table.string('nome', 100).notNullable()
    table.string('site', 50)
    table.string('telefone', 15)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down (knex) {
  
};
