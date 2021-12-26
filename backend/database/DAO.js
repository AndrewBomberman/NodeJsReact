import DATABASE from "./DATABASE.js";

/*
    The DAO (Data Access Object) is the place where the requests and resolved and the data is passed back to the Repository
    
    1. The request is received from the Repository
    2. The DAO manages the request and makes the necessary modifications to the database depending on the type of the request
    3. The DAO returns the response status of the DATABASE back to the Repository
*/

export default class DAO{
    static async connect(){
        this.db = await DATABASE.connect(); // Retreives the DATABASE collection.
    }
    static async get(request){

        /*
            Validates the request and checks the type of the request.
            Configures the response which is sent back to the Repository.
        */ 

        let list,cases=0, deaths=0 ,results; // Initializes the Response variables.

        if(request.cases){
            // If the request contains "cases" checks if there's another query.
            if(request.state || request.date || request.deaths){
                // If the query also contains one of the above variables the follwing query will be resolved.
                list = await this.db.find(request).limit(20).toArray(); // Retreives the first 20 results from the DATABASE in form of an array.
                results = await this.db.countDocuments(request); // Counts the total results found 
            }
            else{

                //If the query has only "cases" then this query will be resolved.
                // Retreives all the distinct states with the number of covid cases greater than the value passed in the request.
                list =  await (await this.db.distinct("state",{"$expr" : {"$gt" : [{"$toInt" :"$cases"} , parseInt(request.cases,10)]}}));
                results = list.length; // Gets the total number of states
            }
        }
        else if(request.state){

            // If the request contains "state" checks if there's another query.
            if(request.date || request.date || request.deaths){
                // If the query also contains one of the above variables the follwing query will be resolved.
                list =  await this.db.find(request).limit(20).toArray(); // Retreives the first 20 results from the DATABASE in form of an array.
                results = await this.db.countDocuments(request); // Counts the total results found 
            }
            else{
                //If the query has only "state" then this query will be resolved.
                // Retreives all the states with the specified name 
                const cursor =  this.db.find({"state":{$eq:request.state}}); 
                const array = await cursor.toArray(); // Converts the cursor into and array
                array.forEach(ele => { // Loops through the array 
                  cases+=parseInt(ele.cases); // Adds the value of state's number of covid cases
                  deaths+=parseInt(ele.deaths); // Adds the value of state's number of covid deaths
                });
            }
        }
        else{
            //If the request does not contain a specific value the query will run a search with the given values
            list =  await this.db.find(request).limit(20).toArray(); // Retreives the first 20 results from the DATABASE in form of an array.
            results = await this.db.countDocuments(request); // Counts the total results found 
        }

        /*
            After the querries are resolved the Response is configured with the retrived values.
            If a result is not found the default value will be 0 or null
        */
        let response = {
            results: results ? results:0, // Checks if the results holds a value and sets the value 0 otherwise
            state:request.state ? request.state:request.state ? request.state:null, // Checks if state varialbe holds a value and sets the value null otherwise
            date:request.date ? request.date:request.date ? request.date:null,  // Checks if date varialbe holds a value and sets the value null otherwise
            cases:cases ? cases:request.cases ? request.cases:null,  // Checks if cases variable holds a value and sets the value null otherwise
            deaths:deaths ? deaths:request.deaths ? request.deaths:null,  // Checks if deaths variable holds a value and sets the value null otherwise
            list:list ? list:[],  // Checks if the list variable holds a value and sets the an empty array otherwise
        };
        return response; // Returns the response to the Repository.
    }
    static async add(request){
        // Inserts the requested data into the DATABASE and passed back to the Repository the status of the operation.
        return await this.db.insertOne(request); 
    }
    static async delete(id){
        console.log(id);
        
        // Deletes the requested data from the DATABASE and passed to the Repository back the status of the operation.
       return await this.db.deleteOne({"_id" :id}); 
    }
    static async update(id,request){
        // Modifies the requested data into the DATABASE and passed to the Repository back the status of the operation.
        return await this.db.updateOne({"_id":id},{$set:request}); 
    }

}