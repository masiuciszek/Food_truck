import * as user from "../controllers/user.controller";
import { Router } from "express";

const router = Router();

router.route("/register").post(user.register);
router.route("/all").get(user.getAllUsers);

export { router };
