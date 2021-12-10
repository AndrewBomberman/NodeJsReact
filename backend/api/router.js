import express from "express";
import Controller from "../controllers/Controller.js";

const router = express.Router();
router.route("/home")
.get(Controller.get)
.post(Controller.add)
.put(Controller.update)
.delete(Controller.delete);

export default router;