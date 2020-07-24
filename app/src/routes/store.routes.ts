import * as storeController from "../controllers/store.controller";
import { Router } from "express";
import authHandler from "../middleware/authHandler";
import { handleAdmin } from "../middleware/adminHandler";

const router = Router();

router
  .route("/create_new_store")
  .post(authHandler, handleAdmin, storeController.createStore);

router
  .route("/user/my_stores")
  .get(authHandler, handleAdmin, storeController.myStores);

export { router };
