import * as userController from "../controllers/user.controller";
import { Router } from "express";
import authHandler from "../middleware/authHandler";
import multer from "multer";
import { upload } from "../utils/imgUpload";

const router = Router();

router.route("/me").get(authHandler, userController.getMe);

router.route("/me/update").put(authHandler, userController.updateMe);

router
  .route("/me/update_password")
  .post(authHandler, userController.updatePassword);

router.route("/me/forgot_password").post(userController.forgotPassword);

router
  .route("/me/resetpassword/:resettoken")
  .post(userController.resetPassword);

router
  .route("/me/avatar")
  .post(upload.single("avatar"), authHandler, userController.uploadAvatar);

router.route("/me/remove").delete(authHandler, userController.removeMe);

router.route("/register").post(userController.registerUser);

export { router };
