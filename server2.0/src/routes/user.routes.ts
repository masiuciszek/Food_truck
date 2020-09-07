import * as user from "../controllers/user.controller";
import { Router } from "express";
import authHandler from "../middleware/authHandler";

const router = Router();

router.route("/register").post(user.register);
router.route("/all").get(user.getAllUsers);
router.route("/get_me").get(authHandler, user.getUserProfile);

export { router };
