import { ObjectID } from "bson";

export default class Model {
    constructor(request){
        return { 
            _id:request._id ? ObjectID(request._id):new ObjectID(), 
            data:{
                state:request.state,
                date:request.date ? request.date:new Date().toLocaleDateString,
                cases:request.cases ? request.cases:0,
                deaths:request.deaths ? request.deaths:0,
            }
        }
    }
    static create(request){
        return new Model(request);
    }
    static getId(id){
        return new ObjectID(id);
    }
    static getData(request){
        const model = new Model(request);
        return {
            state:model.state,
            date:model.date,
            cases:model.cases,
            deaths:model.deaths
        }
    }
}