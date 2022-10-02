import express from "express";
import { validId, validUser } from "../middlewares/global.middle.js";
import userController from "../controllers/user.controler.js";

const route = express.Router();

route.post("/", userController.create);
route.get("/", userController.findAll);
route.get("/:id", validId, validUser, userController.findById);
route.patch("/:id", validId, validUser, userController.update);

export default route;
