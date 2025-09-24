import knex from "knex";
import knexconfig from "../../knexfile.js";

const environment = process.env.NODE_ENV || 'development'
const database = knex(knexconfig[environment])

export { database }