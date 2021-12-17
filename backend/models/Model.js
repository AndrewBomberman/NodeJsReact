import { ObjectID } from "bson";
/*
    The Model converts the requested data into querialbe data.

    In the constructor method it creates a queriable Model
    1. Checks if the request has an id and converts the id into an ObjectID or generates a random ObjectID otherwise
    2. Sets the name of the state
    3. Checks if the request has a date and sets the date or generates a new Date which then converts into a local date format
    4. Checks if the request has cases sets them if so or sets the value 0 otherwise
    5. Checks if the request has deaths sets them if so or sets the value 0 otherwise
*/
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
        return new Model(request); // Returns a new Model
    }
    static getId(id){
        return new ObjectID(id); // Returns on ObjectID type of the specified id
    }
    static getData(request){
        const model = new Model(request); // Creates a new model
        // Returns the Model data
        return {
            state:model.state,
            date:model.date,
            cases:model.cases,
            deaths:model.deaths
        };
    }
}