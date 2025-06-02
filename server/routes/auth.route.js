import { Router } from "express";
import { login, logoutUser, register } from "../controllers/auth.controller.js";

const authRouter = Router();
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logoutUser);

export default authRouter;
