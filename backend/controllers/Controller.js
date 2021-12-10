import Repository from "../repositories/Repository.js"
export default class Controller{
    static async get(req, res, next) {
        const repositoryRes = await Repository.get(req.query);
        console.log(repositoryRes);
        res.json(repositoryRes);
    }
    static async add(req, res, next) {
        const repositoryRes = await Repository.add(req.body);
        res.json(repositoryRes);
    }
    static async update(req, res, next) {
        const repositoryRes = await Repository.update(req.body);
        console.log(repositoryRes);
        res.json(repositoryRes);
    }
    static async delete(req, res,next){
        const repositoryRes = await Repository.delete(req.query);
        console.log(repositoryRes);
        res.json(repositoryRes)
    }
}