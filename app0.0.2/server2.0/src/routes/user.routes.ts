import * as user from "../controllers/user.controller";
import { Router } from "express";
import authHandler from "../middleware/authHandler";

const router = Router();

router.route("/register").post(user.register);
router.route("/all").get(user.getAllUsers);

router.route("/delete_me").delete(authHandler, user.deleteMe);

export { router };
