import express from "express";
import cors  from "cors";
import router from "./router.js";

const server = express();
server.use(cors());
server.use(express.json());

server.use("/api",router);
server.use("*",(req,res)=>{res.status(404).json("Page not found")});

export default server;