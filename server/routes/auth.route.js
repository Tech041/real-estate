import { Router } from "express";
import {
  isAuthenticated,
  login,
  logoutUser,
  register,
} from "../controllers/auth.controller.js";
import { userAuth } from "../middlewares/userAuth.js";
const authRouter = Router();
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/authenticated", userAuth, isAuthenticated);
authRouter.post("/logout", logoutUser);

export default authRouter;
