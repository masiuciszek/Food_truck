import * as auth from "../controllers/auth.controller";
import { Router } from "express";
import authHandler from "../middleware/authHandler";

const router = Router();

router.route("/login").post(auth.login);

router.route("/logout").post(authHandler, auth.logout);

export { router };
