import { database } from "./database/index.js";

export const routes = async (app) => {
    // Define your routes here
    app.get('/', () => {
        return { message: 'Hello, World!' };
    })
    app.get('/products', (req, res) => {
        return res.status(201).send({ message: 'List of products' });
    })
}
