import Model from "../models/Model.js"
import DAO from "../database/DAO.js"

/*
    The role of the Repository is to link the Controller to the DAO (Data Access Object) and the Model.

    1. The requests are passed from the Controller to the DAO through the Repository 
    2. The DAO solves the request and the requested data is passed back to the repository
    3. The Repository passes the data back to the Controller
*/

export default class Repository{
    static async get(request){
        return await DAO.get(request); // Sends the request to the DAO and waits for the DAO response
    }
    static async add(request){
        const model = Model.create(request); // Creates a Model with the request data which then passes to the DAO
        return await DAO.add(model.data); // Sends the request to the DAO and waits for the DAO response
    }
    static async update(request){
        const model  =  Model.create(request); // Creates a Model with the request data which then passes to the DAO
        return await DAO.update(model._id,model.data); // Sends the request to the DAO and waits for the DAO response
    }
    static async delete(request){
        const id = Model.getId(request._id); // Retreives the Model with the specified id and passes it to DAO
        return await DAO.delete(id); // Sends the request to the DAO and waits for the DAO response
    }
}