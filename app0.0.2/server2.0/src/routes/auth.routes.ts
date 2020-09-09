import * as auth from "../controllers/auth.controller";
import { Router } from "express";
import authHandler from "../middleware/authHandler";

const router = Router();

router.route("/login").post(auth.login);

router.route("/logout").post(authHandler, auth.logout);
router.route("/get_me").get(authHandler, auth.getMe);
router.route("/update_profile").put(authHandler, auth.updateProfile);

export { router };
