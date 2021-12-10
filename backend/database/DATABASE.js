import mongodb from "mongodb";
export default class DATABASE {
    static async connect(){
        try {
            const client =  await mongodb.MongoClient.connect(process.env.DATABASE_URL);
            const db = client.db(process.env.DATABASE_NAME);
            return db.collection(process.env.DATABASE_COLLECTION);
            
        }catch (error) {
            console.log(" Couldn't connect to database" + error);
        }       
    }
}