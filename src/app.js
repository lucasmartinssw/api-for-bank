import fastify from "fastify";
import cors from "@fastify/cors";
import process from "process"
import 'dotenv/config'
// node --env-file=.env src/app.js
const app = fastify()

async function server(){
    app.register(cors, {
        origin: true,
        methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
        allowHeaders: ["Content-Type", "Authorization"]
    })
    app.listen({host: '0.0.0.0', port: process.env.PORT}).then(() => {
        console.log("Server is running on http://localhost:3300")
    })
}

server()