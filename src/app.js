import fastify from "fastify";
import { routes } from "./http/routes/index.js"

// node --env-file=.env src/app.js  | node --watch .\src\server.js
const app = fastify()

app.register(routes)

export { app }