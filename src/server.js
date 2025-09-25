import cors from "@fastify/cors";
import 'dotenv/config'
import { app } from "./app.js"
import { database } from "./database/index.js";


async function server(){
    app.register(cors, {
        origin: true,
        methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
        allowHeaders: ["Content-Type", "Authorization"]
    })
    app.listen({host: '0.0.0.0', port: process.env.PORT}).then(() => {
        console.log("Server is running on http://localhost:3300")
    })
    const query = await database('marcas').select('*')
    console.log(query)

    // database.raw('SELECT * FROM produtos').then(result => {
    //     console.log(result)
    // })
}

server()