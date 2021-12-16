import Repository from "../repositories/Repository.js"
export default class Controller{
    /* 
        The Controller gets the requests from the users and sends them to the server to resolve. 
        After a request is resolved the Controller return the response status back to the user.
    */

    static async get(req, res, next) {
        const repositoryRes = await Repository.get(req.query); // Gets the request's query and sends it to the repository
        res.json(repositoryRes); // Receives the response status from the repository and sends it back to the user
    }
    static async add(req, res, next) {
        const repositoryRes = await Repository.add(req.body); // Gets the request's body and sends it to the repository;
        res.json(repositoryRes); // Receives the response status from the repository and sends it back to the user
    }
    static async update(req, res, next) {
        const repositoryRes = await Repository.update(req.body); // Gets the request's body and sends it to the repository;
        res.json(repositoryRes); // Receives the response status from the repository and sends it back to the user
    }
    static async delete(req, res,next){
        const repositoryRes = await Repository.delete(req.query); // Gets the request's query and sends it to the repository
        res.json(repositoryRes); // Receives the response status from the repository and sends it back to the user
    }
}