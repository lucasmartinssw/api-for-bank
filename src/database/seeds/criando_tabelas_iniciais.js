/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, nome: 'Apple', site: 'apple.com', telefone: '0800-761-0867'},
    {id: 2, nome: 'Samsung', site: 'samsung.com', telefone: '0800-761-0868'},
  ]);
};
