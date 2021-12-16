import mongodb from "mongodb";
export default class DATABASE {

    /*
        The DATABASE is the place where the data is retreived from the server and passed to the DAO (Database Access Object)

        1. The Client connects to the specified URL
        2. The requested Database is retreived
        3. The requested Collection is retreived from the Database and passed to the DAO

        If the connection is not succesfull an error message will be passed
    */

    static async connect(){
        try {
            const client =  await mongodb.MongoClient.connect(process.env.DATABASE_URL);
            const db = client.db(process.env.DATABASE_NAME);
            return db.collection(process.env.DATABASE_COLLECTION);
            
        }catch (error) {
            console.error(" Couldn't connect to database" + error);
        }       
    }
}