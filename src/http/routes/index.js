import { database } from "../../database/index.js";

export const routes = async (app) => {
    // Define your routes here
    app.get('/', (req, res) => {
        return { message: 'Hello, World!' };
    })
    app.get('/marcas', (req, res) => {
        const query = database('marcas').select('*').where('id', req.params.id)
        try{
            res.status(200).send({
            message: 'Listagem de marcas',
            data: query,
            error: false
        })
        }
        catch(err){
            res.status(500).send({
                message: 'Erro ao listar marcas',
                data: "",
                error: true
            })
        }
    })
    app.get('/marcas/:id', (req, res) => {
        const query = database('marcas').select('*')
        try{
            res.status(200).send({
            message: 'Listagem de marcas',
            data: query,
            error: false
        })
        }
        catch(err){
            res.status(500).send({
                message: 'Erro ao listar marcas',
                data: "",
                error: true
            })
        }
    })
}
