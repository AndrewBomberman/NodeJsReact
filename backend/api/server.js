import express from "express";
import cors  from "cors";
import router from "./router.js";

const server = express();
server.use(cors());
server.use(express.json());

server.use("/api",router);

export default server;