import express from "express";
import cors  from "cors";
import router from "./router.js";


/*
    This is the file where the server is configured
    1. The express server is initialised
    2. The server uses the CORS (Cross Origin Sharing Resources) instead of body parser
    3. The server user express.json() for sending the response status and getting requests
*/
const server = express();
server.use(cors());
server.use(express.json());

server.use("/api",router); // The server configures the routes


export default server; // The server file is exported