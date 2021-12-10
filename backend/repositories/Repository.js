import Model from "../models/Model.js"
import DAO from "../database/DAO.js"
export default class Repository{
    static async get(request){
        return await DAO.get(request);
    }
    static async add(request){
        const model = Model.create(request);
        return await DAO.add(model.data);
    }
    static async update(request){
        const model  =  Model.create(request);
        return await DAO.update(model._id,model.data);
    }
    static async delete(request){
        const id = Model.getId(request._id);
        return await DAO.delete(id);
    }
}