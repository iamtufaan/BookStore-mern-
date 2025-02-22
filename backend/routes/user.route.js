import express from "express";
import { login, sighup } from "../controller/user.controller.js";

const userRoute = express.Router();

userRoute.post("/signup", sighup);
userRoute.post("/login",login)
export default userRoute;
