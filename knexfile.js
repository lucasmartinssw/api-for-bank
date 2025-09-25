import path from 'node:path'
import { fileURLToPath } from 'url'
import "dotenv/config";

const __firename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__firename)
console.log('firename', __firename)
console.log('dirname', __dirname)

export default {
    development: {
        client: 'mysql2',
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        },
        seeds: {
            directory: path.resolve(__dirname, 'src', 'database', 'seeds')
        }
    }
}