import * as store from "../controllers/store.controller";
import { Router } from "express";
import authHandler from "../middleware/authHandler";

const router = Router();

router.route("/").post(authHandler, store.createStore).get(store.getStores);

router.route("/my_stores").get(authHandler, store.getMyStores);
router.route("/filterstore").get(store.filterStore);

router.route("/:slug").get(store.getStoreBySlug);

router.route("/update_my_store/:slug").put(authHandler, store.updateMyStore);
router.route("/delete/:id").delete(authHandler, store.deleteStore);
export { router };
