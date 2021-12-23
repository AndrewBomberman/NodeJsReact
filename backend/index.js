import dotenv from "dotenv";
import server from "./api/server.js";
import DAO from "./database/DAO.js";

/*
    This is where the applications runs 
    1. The enviroment variables such as server port and database are configured through the "dotenv.config()" command
    2. The server connects to the specified port
    3. The DAO connects
*/

dotenv.config();
const port = process.env.PORT || 6000; //Checks if the specifoed port is available and connects to is or connects to port 6000 otherise
server.listen(port, async ()=>{ // The server listens to the port
    await DAO.connect();
    console.log("listening to port " + port); // The successful connection message is displayed after the connection has been established
});
