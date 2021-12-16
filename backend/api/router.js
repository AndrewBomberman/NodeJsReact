import express from "express";
import Controller from "../controllers/Controller.js";

const router = express.Router(); // Initializes the express server router 

router.route("/home") // Sets the CRUD operations to the "/home" route which then will be managed in the Controller file
.get(Controller.get) //Configures the "get" route
.post(Controller.add) //Configures the "post" route
.put(Controller.update) //Configures the "update" route
.delete(Controller.delete); //Configures the "delete" route

export default router; // Exports the router file