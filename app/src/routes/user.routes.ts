import * as userController from "../controllers/user.controller";
import { Router } from "express";
import authHandler from "../middleware/authHandler";

const router = Router();

router.route("/me").get(authHandler, userController.getMe);

router.route("/me/update").put(authHandler, userController.updateMe);

router
  .route("/me/update_password")
  .post(authHandler, userController.updatePassword);

router.route("/me/remove").delete(authHandler, userController.removeMe);

router.route("/register").post(userController.registerUser);

export { router };
