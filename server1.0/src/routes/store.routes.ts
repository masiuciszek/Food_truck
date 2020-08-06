import * as storeController from "../controllers/store.controller";
import { Router } from "express";
import authHandler from "../middleware/authHandler";
import { handleAdmin } from "../middleware/adminHandler";
import { upload } from "../utils/imgUpload";

const router = Router();

router.route("/stores").get(storeController.getAllStores);

router
  .route("/create_new_store")
  .post(authHandler, handleAdmin, storeController.createStore);

router
  .route("/user/my_stores")
  .get(authHandler, handleAdmin, storeController.myStores);

router
  .route("/user/my_store/:id")
  .get(authHandler, storeController.mySingleStore);

router
  .route("/user/update/:id")
  .put(authHandler, storeController.updateMyStore);

router
  .route("/user/my_store/image/:id")
  .post(upload.single("image"), authHandler, storeController.uploadStoreImage);

router
  .route("/user/delete/:id")
  .delete(authHandler, storeController.deleteSelectedStore);

router
  .route("/user/deleteall")
  .delete(authHandler, storeController.deleteAllMyStores);

router.route("/image/:id").get(storeController.getStoreImage);

router.route("/:id").get(storeController.getStoreById);

router
  .route("/uploadimage2/:id")
  .post(authHandler, storeController.uploadImage2);

export { router };
