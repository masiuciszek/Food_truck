import { Router } from "express";
import * as user from "../controllers/user.controller";
const router = Router();

router.route("/register").post(user.register);

export { router };
