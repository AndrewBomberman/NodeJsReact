import dotenv from "dotenv";
import server from "./api/server.js";
import DAO from "./database/DAO.js";

dotenv.config();
const port = process.env.PORT || 6000;
server.listen(port, async ()=>{
    await DAO.connect();
    console.log("listening to port " + port)
})
