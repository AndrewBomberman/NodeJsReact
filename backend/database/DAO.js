import DATABASE from "./DATABASE.js";
export default class DAO{
    static async connect(){
        this.db = await DATABASE.connect();
    }
    static async get(request){
        let list,cases=0,deaths=0,results;
        if(request.cases){
            if(request.state || request.date || request.deaths){
                list = await this.db.find(request).limit(20).toArray();
            }
            else{
                list =  await this.db.distinct("state",{"$expr" : {"$gt" : [{"$toInt" :"$cases"} , parseInt(request.cases,10)]}});
                results = list.length;
            }
        }
        else if(request.state){
            if(request.date || request.date || request.deaths){
                list =  await this.db.find(request).limit(20).toArray();
            }
            else{
                const cursor =  this.db.find({"state":{$eq:request.state}});
                const array = await cursor.toArray();
                array.forEach(ele => {
                  cases+=parseInt(ele.cases);
                  deaths+=parseInt(ele.deaths);
                });
            }
        }
        else{
            list =  await this.db.find(request).limit(20).toArray();
            results = await this.db.countDocuments(request);
        }
        let response = {
            results: results ? results:0,
            state:request.state ? request.state:request.state ? request.state:null,
            date:request.date ? request.date:request.date ? request.date:null,
            cases:cases ? cases:request.cases ? request.cases:null,
            deaths:deaths ? deaths:request.deaths ? request.deaths:null,
            list:list ? list:[],
        };
        return response;
    }
    static async add(request){
        return await this.db.insertOne(request);
    }
    static async delete(id){
       return await this.db.deleteOne({"_id" :id});
    }
    static async update(id,request){
        return await this.db.updateOne({"_id":id},{$set:request});
    }

}