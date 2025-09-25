import knex from "knex";
import knexconfig from "../../knexfile.js";
import "dotenv/config";
const environment = process.env.NODE_ENV || 'development'
const database = knex(knexconfig[environment])

export { database }