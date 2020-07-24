import * as storeController from "../controllers/store.controller";
import { Router } from "express";
import authHandler from "../middleware/authHandler";

const router = Router();

router.route("/create_new_store").post(storeController.createStore);

export { router };
