import * as review from "../controllers/review.controller";
import { Router } from "express";
import authHandler from "../middleware/authHandler";

const router = Router();

router.route("/:storeId").post(authHandler, review.leaveReview);

export { router };
