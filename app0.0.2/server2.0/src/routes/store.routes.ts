import { Router } from "express";
import * as store from "../controllers/store.controller";
import authHandler from "../middleware/authHandler";

const router = Router();

router.route("/").post(authHandler, store.createStore).get(store.getStores);

router.route("/my_stores").get(authHandler, store.getMyStores);

router.route("/update_my_store/:slug").put(authHandler, store.updateMyStore);

export { router };
